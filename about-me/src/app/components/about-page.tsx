import { Footer } from "./footer";
import { useSiteInfo } from "@/hooks/useSiteInfo";
import { ArrowLeft } from "lucide-react";
import { WaveBand } from "./WaveBand";

const FONT = "'Silkscreen', monospace";

export function AboutMePage() {
  const { data: siteInfo } = useSiteInfo();

  return (
    <div className="bg-[#181818] min-h-screen text-white/80 font-sans flex flex-col relative overflow-x-hidden pt-20">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-12 pb-32 flex-grow">
        
        <a 
          href={siteInfo.navigation.home} 
          className="mb-8 flex w-fit items-center gap-2 text-white/50 transition-colors hover:text-white"
          style={{ fontFamily: FONT, fontSize: 14 }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Silkscreen',sans-serif] uppercase tracking-tight">System Profile: Gijs Willemsen</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/70">
            I am a 15-year-old self-taught developer, hardware engineer, and infrastructure enthusiast. I am always doing something in IT, ICT, Engineering, Computer Science, Robotics, or Cybersecurity.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4 text-white/70">
            My drive has always been to improve the world around me. If something bothers me, I want to build a solution for it. When people ask how I manage or map out massive architectural projects at my age, honestly, I don't know. I just do.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          
          <section>
            <h2 className="text-2xl text-white font-semibold mb-4 font-['Silkscreen',sans-serif]"><span className="text-blue-500 mr-2">01.</span>The Origin: Deconstruction & Imaginary Builds</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>As a little kid, I was just a bit of a menace. I wanted to make stuff to destroy other things and also what looked cool, but mostly to prove myself and get better at things than other people.</p>
              <p>From the moment I got electrical devices in my hands—like a flashlight at 2 or 3 years old—I wanted to pull them apart. I dismantled every device I could find and used the components inside to build imaginary things. I didn't know how any of it worked yet, but taking them apart was how I learned.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-semibold mb-4 font-['Silkscreen',sans-serif]"><span className="text-blue-500 mr-2">02.</span>The School "Hacking" Era (Groups 3 - 5)</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>My progress was always driven by competition and the need to figure things out first.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Group 3 (Age 6):</strong> We got laptops at school, and I discovered keyboard shortcuts. I started learning all of them to be the best. When someone else found a new one, I would always say, "I already knew that one!" Most of the time I did, but when I didn't, it annoyed me, which pushed me to learn even more.</li>
                <li><strong>Group 4:</strong> I started "hacking" other people's accounts on our school platform (moo.nl) by changing their passwords, backgrounds, and apps. When a classmate couldn't log in, I would show up as the "hero" to help them out and just type in the new password I had created.</li>
                <li><strong>Group 5:</strong> I found a shortcut that factory-reset the school Chromebooks. It wasn't even an impressive hack—just a built-in keyboard combination—but the school's IT department wasn't very happy about it after I reset my friend's device.</li>
              </ul>
              <p className="mt-4">This drive to win wasn't even limited to tech. During this time, I also got really good at drawing, not because I was passionate about art, but purely out of the competition of other kids trying to be better than me.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-semibold mb-4 font-['Silkscreen',sans-serif]"><span className="text-blue-500 mr-2">03.</span>The Lockdown Pivot: Jumping to Software</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>During the 2019/2020 pandemic lockdowns, two things happened. First, I started messing with the moo.nl accounts again and actually almost got in trouble for it.</p>
              <p>Second, I had to entertain myself, so I watched a ton of YouTube and finally jumped from hardware into software. My first ever coding project was building a voice-activated "Jarvis" from a tutorial. I began to understand it and it worked. I tried to make it "smart" by connecting it to a ChatGPT API, which literally just consisted of me typing <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-['Silkscreen',sans-serif]">API_KEY=xxxxxxx-xxxxxx-xxxxxx</code> at the top of the HTML code. Which is pretty funny to me when i look at it now :)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-semibold mb-4 font-['Silkscreen',sans-serif]"><span className="text-blue-500 mr-2">04.</span>Current Pipeline & Future Architecture</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>I build things to solve problems that bother me, specifically targeting artificial intelligence, user autonomy, and privacy.</p>
              <div className="space-y-4 mt-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-white font-bold mb-1">Sable <span className="text-blue-400 text-sm font-normal ml-2 font-['Silkscreen',sans-serif]">(Active First Big Project)</span></h3>
                  <p className="text-sm">My primary focus right now is building my own AI. Sable isn't just a standard script; it is a complex, ground-up AI architecture.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-white font-bold mb-1">The OID Protocol <span className="text-white/50 text-sm font-normal ml-2 font-['Silkscreen',sans-serif]">(Idea/Blueprint)</span></h3>
                  <p className="text-sm">Developed because the UK wanting people to identify themselves on the internet "to protect the children" is just BS. I want to make a fully private internet layer that no government can touch.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-white font-bold mb-1">Algorithmic Autonomy <span className="text-white/50 text-sm font-normal ml-2 font-['Silkscreen',sans-serif]">(Idea/Blueprint)</span></h3>
                  <p className="text-sm">A media platform that connects to the OID network to solve the problem of doom-scrolling. Instead of an algorithm controlling you, the user selects exactly what they want to see—like filtering for purely educational videos, or setting exactly how long a video should be to appear on your "For You" page. It's about solving problems by listening to what users actually want.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-semibold mb-4 font-['Silkscreen',sans-serif]"><span className="text-blue-500 mr-2">05.</span>Operational Infrastructure & The Loop</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>I run my own self-hosted stack on a Proxmox Threadripper server. I do it because it needs tinkering—it's like a puzzle to figure out. Having complete control over my environment and hosting my own tools is just really nice to have.</p>
              <p>I "try" to balance learning for school and my hobbies, but that never plays out well. I am always spending hours working on projects and maybe 15 minutes on school.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-semibold mb-4 font-['Silkscreen',sans-serif]"><span className="text-blue-500 mr-2">06.</span>System Interrupts</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>There isn't really a "disconnect" for me. My hobbies are the disconnect for other things. When I am done with homework or my job, I just go on with my projects. When I get bored of a project, I continue a different one, or watch YouTube to learn even more and pick up new skills.</p>
              <p>When I am overstimulated from a project or just want to step away, my interrupts include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Playing chess on Chess.com or on a physical board with my brother, parents, or friends.</li>
                <li>Paddleboarding in the summer with my brother, nephew, niece, or friends.</li>
                <li>Playing with my dog (throwing the ball) or taking the dog for a walk to clear my head.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
      
      {/* Brand button to scroll to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 left-4 font-['Silkscreen',sans-serif] text-[13px] text-white/30 hover:text-white whitespace-nowrap cursor-pointer transition-colors duration-300 focus:outline-none z-50"
        style={{ cursor: 'pointer' }}
      >
        {siteInfo.brand}
      </button>

      {/* Wave and Footer */}
      <div className="mt-auto">
        <WaveBand />
        <Footer 
          onHome={() => { window.location.href = siteInfo.navigation.home; }}
          onResume={() => { window.location.href = siteInfo.navigation.resume; }}
          onProjects={() => { window.location.href = siteInfo.navigation.projects; }} 
        />
      </div>
    </div>
  );
}
