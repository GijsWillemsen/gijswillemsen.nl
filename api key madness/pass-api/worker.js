// api-worker/worker.js

import users from './users.json' assert { type: 'json' };

import bobNotes from './files/bob/notes.txt' assert { type: 'text' };
import aliceTodo from './files/alice/todo.txt' assert { type: 'text' };

// Images as base64 data URIs — replace "..." with your actual base64 strings
const IMAGES = {
  'bob.jpg': 'data:image/jpeg;base64,...',
  'bob_cosplay.jpg': 'data:image/jpeg;base64,...',
  'alice.jpg': 'data:image/jpeg;base64,...',
  'cheddar_the_1st.jpg': 'data:image/jpeg;base64,...',
  'hammy_thug_life.jpg': 'data:image/jpeg;base64,...'
};

const FILES = {
  bob: {
    'notes.txt': bobNotes
  },
  alice: {
    'todo.txt': aliceTodo
  }
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

function isAuthenticated(request, username) {
  const authHeader = request.headers.get('Authorization') || '';
  // Expect: Authorization: Bearer <username>-token
  return authHeader === `Bearer ${username}-token`;
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // GET /api/users
  if (pathname === '/api/users' && request.method === 'GET') {
    // Return all users with passwords (insecure by design)
    return jsonResponse(users);
  }

  // GET /api/files/:username
  if (pathname.startsWith('/api/files/') && request.method === 'GET') {
    const parts = pathname.split('/');
    const username = parts[3];

    if (!username || !(username in FILES)) {
      return new Response('User files not found', { status: 404 });
    }

    if (!isAuthenticated(request, username)) {
      return new Response('Unauthorized', { status: 401 });
    }

    return jsonResponse({ files: FILES[username] });
  }

  // GET /api/images/:imageName
  if (pathname.startsWith('/api/images/') && request.method === 'GET') {
    const parts = pathname.split('/');
    const imageName = parts[2];
    if (!imageName || !(imageName in IMAGES)) {
      return new Response('Image not found', { status: 404 });
    }

    const base64Data = IMAGES[imageName];
    // Decode base64 (data URI format: data:image/jpeg;base64,...)
    const base64Str = base64Data.split(',')[1];
    const bytes = Uint8Array.from(atob(base64Str), c => c.charCodeAt(0));

    return new Response(bytes, {
      headers: { 'Content-Type': 'image/jpeg' }
    });
  }

  return new Response('Not Found', { status: 404 });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
