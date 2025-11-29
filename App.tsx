import React from 'react';
import { 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  User,
  Share2,
  Bookmark
} from 'lucide-react';
import { ProductivityChart } from './components/ProductivityChart';
import { AiConsultant } from './components/AiConsultant';

// Helper component for "The Fix" callouts
const FixBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="my-8 bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
    <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
      <span className="bg-indigo-200 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">The Fix</span>
      {title}
    </h4>
    <p className="text-indigo-800/80 leading-relaxed">
      {children}
    </p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Layers className="text-indigo-600 w-6 h-6" />
            <span className="font-bold text-lg tracking-tight text-slate-900">FlowState</span>
          </div>
          <div className="flex items-center gap-4">
             <button className="hidden sm:block text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">
              Log In
            </button>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
              Start Trial
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
        
        {/* Article Header */}
        <header className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            Project Management
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            7 Hidden Project Management Mistakes That Are Silent Productivity Killers
          </h1>
          <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed font-light mb-8">
            How to identify the process leaks costing your team hours every week, and exactly how to plug them.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 border-y border-slate-100 py-6 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                FS
              </div>
              <div>
                <p className="font-semibold text-slate-900">FlowState Team</p>
                <p>Productivity Experts</p>
              </div>
            </div>
            <div className="flex items-center gap-6 ml-auto">
               <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Oct 24, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
              <div className="flex gap-2 text-slate-400">
                <button className="hover:text-indigo-600"><Share2 size={18} /></button>
                <button className="hover:text-indigo-600"><Bookmark size={18} /></button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-slate prose-lg max-w-none marker:text-indigo-500">
          
          <p className="text-lg leading-relaxed text-slate-700 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
            We have all been there. It’s 4:30 PM on a Thursday. You have been working non-stop since morning, yet your to-do list looks exactly the same as it did when you opened your laptop.
          </p>
          
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Your team is busy. Messages are flying, notifications are dinging, and meetings are happening. But actual project completion? That seems to be moving at a glacial pace.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-8">
            When projects drag and deadlines slip, it’s easy to blame a lack of resources or "lazy" team members. But in 90% of cases, the problem isn’t the people; it’s the process. Specifically, it’s the small, invisible friction points that shave minutes off every hour until whole workdays are lost.
          </p>

          <div className="my-12">
            <ProductivityChart />
            <p className="text-center text-sm text-slate-500 mt-4 italic">
              Figure 1: Average hours lost per week due to inefficient processes.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-slate-700 mb-12 font-medium">
            If you are ready to stop "herding cats" and start shipping work, here are the seven project management mistakes likely sabotaging your team’s efficiency, and the actionable fixes to solve them.
          </p>

          {/* Point 1 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Treating Your Inbox Like a Project Manager</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            The most common mistake small to mid-sized teams make is managing workflows through email chains.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Email is a communication tool, not a collaboration tool. When a project lives in email, critical context is buried in nested threads. Files get lost. Only the people cc'd know the status of a task. This leads to the "Where is that file?" scavenger hunt that costs the average employee up to 2.5 hours per day.
          </p>
          <FixBox title="Centralize the Source of Truth">
            Move task assignments out of the inbox and into a dedicated project management interface. Communication regarding a specific task should happen on the task card or document itself. This creates a permanent record of decisions and feedback that anyone on the team can access without digging through their archives.
          </FixBox>

          {/* Point 2 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. The "Status Update" Meeting Trap</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            If you are holding a weekly one-hour meeting with six people just to go around the table and say what everyone is working on, you are burning six hours of company productivity (plus the context-switching recovery time).
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Status update meetings are morale killers. They force makers (developers, writers, designers) to break their flow state to report on work rather than doing the work.
          </p>
          <FixBox title="Asynchronous Reporting">
            Implement a "stand-up" workflow using your PM software or chat tool. Have team members post a 3-bullet update at the start of the day:
            <ul className="list-disc ml-6 mt-2">
              <li>What I finished yesterday.</li>
              <li>What I’m focusing on today.</li>
              <li>Any blockers getting in my way.</li>
            </ul>
            <span className="block mt-2">This keeps leadership informed without interrupting deep work.</span>
          </FixBox>

          {/* Point 3 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Failing to Define Task Dependencies</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            You assign a task to your designer. Three days later, you ask why it isn’t done. They reply, "I'm still waiting for the copy from the marketing team."
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            This is a dependency breakdown. When tasks are assigned in a vacuum, bottlenecks remain invisible until the deadline is already missed.
          </p>
          <FixBox title="Visualize the Workflow">
            Use a Gantt chart or a Kanban board with dependency logic. Your team needs to see that Task B literally cannot start until Task A is complete. When these links are visual, team members naturally prioritize the work that unlocks their colleagues, rather than just cherry-picking the easiest tasks on their list.
          </FixBox>

          {/* Point 4 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. The "Just One Small Thing" Syndrome (Scope Creep)</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            It starts innocently. A stakeholder asks for a font change. Then an extra feature. Then a different reporting format. Individually, these take 10 minutes. Collectively, they derail the sprint.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            When you don’t have a formal process for handling changes, your team ends up doing "shadow work", work that takes time but isn’t tracked or credited toward the project goals.
          </p>
          <FixBox title="The 'Icebox' Method">
            Never say "yes" immediately. Instead, say, "Let’s put that in the Icebox."
            <br className="mb-2" />
            Create a specific section in your project view for new requests. Review them weekly. If a new task is added to the active sprint, an existing task of equal size must be removed. This zero-sum approach forces stakeholders to prioritize what they actually want without burning out the team.
          </FixBox>

           {/* Point 5 */}
           <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Assigning Tasks to "The Team"</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            There is an old adage in management: "When everyone is responsible, no one is responsible."
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            If you assign a task to three people, all three will assume the other two are handling the heavy lifting. This is known as social loafing. It leads to finger-pointing when the deadline wooshes by.
          </p>
          <FixBox title="The DRI Model">
            Apple made this famous: The Directly Responsible Individual (DRI). Every task, no matter how large, must have one owner. Others can be "watchers" or "contributors," but only one person is responsible for moving the card to the "Done" column. This creates immediate clarity and accountability.
          </FixBox>

          {/* Point 6 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Ignoring Capacity Planning (The Burnout Express)</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            Are you assigning tasks based on the number of hours in a day, or the number of productive hours in a day?
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            If you assume your team works 8 hours a day, your schedule will fail. Between meetings, breaks, admin, and human nature, most knowledge workers have about 4 to 5 hours of deep focus time. Booking them for 8 hours leads to carry-over work, which creates a backlog, which leads to stress.
          </p>
          <FixBox title="Workload Management Views">
            Stop guessing who is busy. Use a PM tool that offers resource management or workload views. This allows you to see who is overloaded and who has capacity before you assign the next batch of tasks. Leveling the workload prevents burnout and ensures deadlines are actually realistic.
          </FixBox>

          {/* Point 7 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Using Too Many Disconnected Tools</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            Your tasks are in a spreadsheet. Your chat is in Slack. Your files are in Drive. Your time tracking is in a browser extension.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            This is "context switching," and it is cognitively expensive. Every time a team member alt-tabs to a different tool to find information, they lose focus.
          </p>
          <FixBox title="The All-in-One Ecosystem">
            Simplicity scales. The goal is to reduce the number of tabs open in your browser. Look for a project management platform that integrates with your existing stack (like Google Drive, Slack, or GitHub). When your team can track time, comment on files, and move tasks from a single dashboard, friction disappears.
          </FixBox>

          <hr className="my-12 border-slate-200" />

          {/* Interactive AI Section */}
          <div className="bg-slate-900 rounded-3xl p-8 mb-12 shadow-2xl relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              Is your process fueling your growth, or holding you back?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-xl relative z-10">
              Identifying these mistakes is the first step. Fixing them requires the right infrastructure. Use our AI Consultant below to diagnose your specific team bottleneck.
            </p>
            
            <div className="relative z-10">
              <AiConsultant />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            You shouldn't have to spend your day nagging your team for updates or searching through email threads for attachments. You need a command center that does the heavy lifting for you.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-8">
            <span className="font-bold text-indigo-600">FlowState</span> was built to eliminate the busy work. We replace scattered spreadsheets and endless status meetings with a streamlined, visual workspace that keeps your team aligned and your projects on time.
          </p>
        </article>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to save your team 10+ hours this week?
          </h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Join thousands of teams who have switched to a calmer, more productive way of working.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
              Start Free 14-Day Trial <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
              Download Checklist
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-500 uppercase tracking-wide font-medium">
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> No credit card</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> Unlimited users</span>
          </div>
        </div>

      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} FlowState. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;