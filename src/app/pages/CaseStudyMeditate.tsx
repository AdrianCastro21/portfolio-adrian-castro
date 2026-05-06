import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Users, Briefcase, BoxSelect, CheckCircle2, AlertTriangle, Layers, Shuffle, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/Button";

export function CaseStudyMeditate() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-full">Case Study</span>
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider rounded-full">IT Consulting</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Meditate App
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl leading-relaxed">
              Transforming a fragmented, manual process into a centralized decision-making platform.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100 dark:border-slate-800 mb-12">
              <div>
                <p className="text-sm text-slate-500 mb-1">Role</p>
                <p className="font-semibold text-slate-900 dark:text-white">Product Designer</p>
                <p className="text-sm text-slate-500">End-to-end</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Context</p>
                <p className="font-semibold text-slate-900 dark:text-white">IT Consulting</p>
                <p className="text-sm text-slate-500">Internal Tool</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Timeline</p>
                <p className="font-semibold text-slate-900 dark:text-white">12 Weeks</p>
                <p className="text-sm text-slate-500">Discovery to MVP</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Platform</p>
                <p className="font-semibold text-slate-900 dark:text-white">Web App</p>
                <p className="text-sm text-slate-500">Desktop Focused</p>
              </div>
            </div>

            {/* Impact Block */}
            <div className="bg-indigo-600 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-indigo-600/20">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-200 mb-6">Key Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <Layers className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Reduced</p>
                  <p className="text-indigo-200 text-sm">system switching</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Eliminated</p>
                  <p className="text-indigo-200 text-sm">manual tracking</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Lowered</p>
                  <p className="text-indigo-200 text-sm">cognitive load</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Faster</p>
                  <p className="text-indigo-200 text-sm">decision-making</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TL;DR */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center mb-6">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Problem</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Manual, fragmented, and unreliable process under high time pressure.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center mb-6">
                <Shuffle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Solution</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Centralized system with matching as decision support, not full automation.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Result</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Improved operational efficiency and significantly faster decision-making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Problem Section & 4. User Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                The original challenge was to integrate a matching algorithm. However, discovery revealed the real issue wasn't finding candidates, but rather surviving the chaotic environment in which decisions were made.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center flex-shrink-0 text-rose-500">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Fragmented systems</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Jumping between CRM, Excel, and internal tools.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center flex-shrink-0 text-rose-500">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Manual workflows</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">High cognitive load tracking who is available when.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center flex-shrink-0 text-rose-500">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Outdated data</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Low data trust leading to inefficient verifications.</p>
                  </div>
                </li>
              </ul>
              
              <blockquote className="border-l-4 border-indigo-500 pl-6 py-2">
                <p className="text-xl font-medium italic text-slate-800 dark:text-slate-200">
                  "If you don't respond fast, you lose the project."
                </p>
              </blockquote>
            </div>

            {/* User */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">User Profile</h3>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">Resource Manager</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4" /> Core Needs
                  </h4>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li>• Speed in candidate identification</li>
                    <li>• Clarity of candidate availability</li>
                    <li>• Reliable, up-to-date data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4" /> Frustrations
                  </h4>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li>• Constant system switching</li>
                    <li>• Low trust in existing databases</li>
                    <li>• Incomplete profile information</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Key Insight */}
      <section className="py-24 px-6 bg-indigo-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[100px] -translate-y-1/2" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            "The problem wasn't finding candidates. <br className="hidden md:block"/>
            <span className="text-indigo-200">It was enabling fast decisions with reliable information."</span>
          </h2>
        </div>
      </section>

      {/* 6. Shift in Approach & 7. Strategy */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-8">Shift in Approach</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider mb-2 block">Before</span>
                  <p className="font-medium text-slate-900 dark:text-white">Matching algorithm integration</p>
                  <p className="text-sm text-slate-500 mt-2">Focused purely on automating candidate selection.</p>
                </div>
                <div className="hidden sm:flex items-center text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                  <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2 block">After</span>
                  <p className="font-medium text-slate-900 dark:text-white">Decision-support system</p>
                  <p className="text-sm text-indigo-700/70 dark:text-indigo-300 mt-2">Empowering recruiters with centralized, reliable context.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Core Strategy</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-indigo-500"><Layers className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Centralize information</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Bring all necessary data points into one unified view.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-indigo-500"><BoxSelect className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Reduce decision space</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Surface the most relevant information first.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-indigo-500"><ShieldCheck className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Maintain human control</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Algorithm suggests, human decides.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Product Decisions */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Product Decisions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">01</span></div>
              <h3 className="text-xl font-bold mb-3">Support, not automation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We positioned the matching algorithm as a recommendation engine rather than an automated assigner. This kept the human in the loop for complex relationship dynamics.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">02</span></div>
              <h3 className="text-xl font-bold mb-3">Full centralization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instead of linking out to the CRM or HR tool, we pulled key profile data, CVs, and availability into a single modal to eliminate tool switching.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">03</span></div>
              <h3 className="text-xl font-bold mb-3">Structured application flow</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Created a clear pipeline (Suggested → Shortlisted → Assigned) replacing ad-hoc email chains and scattered spreadsheets.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">04</span></div>
              <h3 className="text-xl font-bold mb-3">Data trust signals</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Added visible timestamps ("Last updated 2h ago") to increase confidence in the data being viewed, reducing unnecessary verification calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Solution Section (UI Mockups) */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A unified platform broken down into focused modules, designed strictly around the recruiter's mental model.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* Dashboard Mockup */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-3/5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                {/* Abstract UI Header */}
                <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-4">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-rose-400"/><div className="w-3 h-3 rounded-full bg-amber-400"/><div className="w-3 h-3 rounded-full bg-emerald-400"/></div>
                  <div className="h-6 w-48 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
                </div>
                {/* Abstract UI Body */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 flex flex-col justify-between">
                      <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="w-10 h-8 bg-indigo-500/20 dark:bg-indigo-500/40 rounded"></div>
                    </div>
                    <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 flex flex-col justify-between">
                      <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="w-12 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                    <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 flex flex-col justify-between">
                      <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-2/3 h-48 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-4">
                       <div className="w-32 h-4 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
                       <div className="space-y-3">
                         <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                         <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                         <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                       </div>
                    </div>
                    <div className="w-1/3 h-48 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-4">
                       <div className="w-24 h-4 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
                       <div className="w-full h-32 rounded-full bg-slate-200 dark:bg-slate-700/50 flex items-center justify-center">
                         <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Provides high-level metrics, actionable alerts, and a rapid overview of the current resource landscape.
                </p>
                <ul className="text-sm font-medium space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Actionable alerts on unstaffed roles</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> At-a-glance bench metrics</li>
                </ul>
              </div>
            </div>

            {/* Consultants & Projects Mockup */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
              <div className="w-full lg:w-3/5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                {/* Abstract UI Header */}
                <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-4">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"/><div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"/></div>
                  <div className="h-6 w-32 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
                </div>
                {/* Abstract UI Body */}
                <div className="flex h-72">
                  <div className="w-1/3 border-r border-slate-100 dark:border-slate-800 p-4 space-y-3">
                    <div className="w-full h-10 bg-slate-100 dark:bg-slate-800 rounded-lg"></div>
                    <div className="w-full h-10 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-lg relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-indigo-500 before:rounded-r"></div>
                    <div className="w-full h-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg"></div>
                    <div className="w-full h-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg"></div>
                  </div>
                  <div className="w-2/3 p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div className="space-y-2 mt-2">
                          <div className="w-32 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          <div className="w-24 h-3 bg-slate-100 dark:bg-slate-800 rounded"></div>
                        </div>
                      </div>
                      <div className="w-20 h-8 bg-indigo-500 rounded-md"></div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <div className="w-16 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                      <div className="w-20 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                      <div className="w-14 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                    </div>
                    <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
                    <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="w-5/6 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Consultants & Matching</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Detailed profiles pulled from multiple systems, displaying availability, skills, and match percentage against project requirements.
                </p>
                <ul className="text-sm font-medium space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Data freshness indicators</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Algorithm matching percentage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> One-click assignment flow</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. System Integration Diagram */}
      <section className="py-24 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">System Integration</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {/* External Systems */}
            <div className="flex flex-col gap-4">
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">CV Database</div>
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">Time Tracking</div>
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">CRM / Projects</div>
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">Billing</div>
            </div>
            
            {/* Connecting Arrows */}
            <div className="flex md:flex-col gap-2 items-center text-slate-300 dark:text-slate-600 rotate-90 md:rotate-0">
              <ArrowRight className="w-6 h-6" />
              <ArrowRight className="w-6 h-6" />
              <ArrowRight className="w-6 h-6" />
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Central Platform */}
            <div className="w-48 h-48 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border-4 border-indigo-500 flex flex-col items-center justify-center shadow-xl">
              <Layers className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="font-bold text-slate-900 dark:text-white text-center leading-tight">Central<br/>Platform</span>
            </div>
          </div>
          
          <p className="text-slate-500 max-w-lg mx-auto">
            The platform acts as an evolutionary step towards a unified ERP, fetching data from siloed systems to create a single source of truth for decision-making.
          </p>
        </div>
      </section>

      {/* 11. Validation & 12. Results */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Validation</h2>
            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-6">
              <ul className="space-y-3 font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-indigo-500" /> 5 Resource Managers tested
                </li>
                <li className="flex items-center gap-3">
                  <BoxSelect className="w-5 h-5 text-indigo-500" /> Non-functional prototype
                </li>
              </ul>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Goals:</h4>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 ml-4 text-sm">
              <li>Validate value proposition of centralization.</li>
              <li>Test the intuition behind the application flow.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            
            <div className="mb-6">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> What Worked
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="pl-4 border-l-2 border-emerald-100 dark:border-emerald-900/50">High perceived value in centralization.</li>
                <li className="pl-4 border-l-2 border-emerald-100 dark:border-emerald-900/50">Improved and natural workflow.</li>
                <li className="pl-4 border-l-2 border-emerald-100 dark:border-emerald-900/50">Alerts effectively drove immediate action.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Friction Points
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="pl-4 border-l-2 border-rose-100 dark:border-rose-900/50">Low explainability of matching score.</li>
                <li className="pl-4 border-l-2 border-rose-100 dark:border-rose-900/50">Confusion in some application statuses.</li>
                <li className="pl-4 border-l-2 border-rose-100 dark:border-rose-900/50">Low visibility of overarching open roles.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Impact */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Business Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">↓</div>
              <p className="font-semibold mb-1">Operational Load</p>
              <p className="text-xs text-slate-400">Significantly reduced</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">100%</div>
              <p className="font-semibold mb-1">Manual Processes</p>
              <p className="text-xs text-slate-400">Eliminated in workflow</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">0</div>
              <p className="font-semibold mb-1">Tool Switching</p>
              <p className="text-xs text-slate-400">During decision making</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">↑</div>
              <p className="font-semibold mb-1">Perceived Speed</p>
              <p className="text-xs text-slate-400">Increased drastically</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Next Steps & 15. Learning */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 md:p-12 rounded-3xl border border-indigo-100 dark:border-indigo-800/50 mb-16 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">Key Learning</h3>
            <p className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white leading-relaxed">
              "In complex systems, value doesn't come from automating decisions, but from structuring reliable information to enable better and faster decisions."
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Next Steps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Improve matching explainability</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Improve visibility of open roles</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Integrate external candidates</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Measure impact in production</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 16. Navigation */}
      <section className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Button>
          </Link>
          <Link to="/">
            <Button className="gap-2">
              Next Case Study <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}