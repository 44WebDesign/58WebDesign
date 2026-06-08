import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, Trash2, Calendar, Target, Clock, ArrowRight } from 'lucide-react';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

type ColumnType = 'week' | 'month' | 'goals';

export default function Todo() {
  const [todos, setTodos] = useState<Record<ColumnType, TodoItem[]>>({
    week: [],
    month: [],
    goals: []
  });

  const [inputs, setInputs] = useState<Record<ColumnType, string>>({
    week: '',
    month: '',
    goals: ''
  });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedWeek = localStorage.getItem('58webdesign-todo-week');
      const savedMonth = localStorage.getItem('58webdesign-todo-month');
      const savedGoals = localStorage.getItem('58webdesign-todo-goals');

      setTodos({
        week: savedWeek ? JSON.parse(savedWeek) : [
          { id: 'w1', text: 'Optimize CSS delivery and Tailwind styles', completed: false, createdAt: Date.now() - 86400000 },
          { id: 'w2', text: 'Finalize brand identity and logomarks', completed: true, createdAt: Date.now() - 172800000 }
        ],
        month: savedMonth ? JSON.parse(savedMonth) : [
          { id: 'm1', text: 'Complete SEO performance audits for client sites', completed: false, createdAt: Date.now() },
          { id: 'm2', text: 'Roll out updated Interactive Video components', completed: false, createdAt: Date.now() }
        ],
        goals: savedGoals ? JSON.parse(savedGoals) : [
          { id: 'g1', text: 'Secure 15 active retainer partnerships', completed: false, createdAt: Date.now() },
          { id: 'g2', text: 'Launch redesigned internal showcase gallery', completed: false, createdAt: Date.now() }
        ]
      });
    } catch (e) {
      console.error('Error reading localStorage for todo items:', e);
    }
  }, []);

  // Save changes to localStorage
  const saveTodos = (key: ColumnType, updatedList: TodoItem[]) => {
    try {
      localStorage.setItem(`58webdesign-todo-${key}`, JSON.stringify(updatedList));
    } catch (e) {
      console.error(`Error saving localStorage for ${key}:`, e);
    }
  };

  const handleAddTodo = (column: ColumnType, e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = inputs[column].trim();
    if (!text) return;

    const newItem: TodoItem = {
      id: Math.random().toString(36).substring(2, 9),
      text,
      completed: false,
      createdAt: Date.now()
    };

    const updated = [...todos[column], newItem];
    setTodos(prev => ({
      ...prev,
      [column]: updated
    }));
    setInputs(prev => ({
      ...prev,
      [column]: ''
    }));
    saveTodos(column, updated);
  };

  const handleToggleTodo = (column: ColumnType, id: string) => {
    const updated = todos[column].map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(prev => ({
      ...prev,
      [column]: updated
    }));
    saveTodos(column, updated);
  };

  const handleDeleteItem = (column: ColumnType, id: string) => {
    const updated = todos[column].filter(item => item.id !== id);
    setTodos(prev => ({
      ...prev,
      [column]: updated
    }));
    saveTodos(column, updated);
  };

  const handleClearCompleted = (column: ColumnType) => {
    const updated = todos[column].filter(item => !item.completed);
    setTodos(prev => ({
      ...prev,
      [column]: updated
    }));
    saveTodos(column, updated);
  };

  return (
    <motion.div
      id="todo-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-zinc-50 dark:bg-primary min-h-screen text-primary dark:text-white"
    >
      <div className="max-w-[1600px] mx-auto p-6 md:p-12 lg:p-20 flex flex-col min-h-screen">
        
        {/* Editorial Split Header */}
        <motion.section 
          id="todo-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 border-b border-primary/10 dark:border-white/10 pb-16 mb-16"
        >
          <div className="lg:col-span-2 pr-8 border-b lg:border-b-0 lg:border-r border-primary/10 dark:border-white/10 pb-8 lg:pb-0">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter">
              Planning<br />
              <span className="italic opacity-60 font-light">& Tasks</span>
            </h1>
          </div>
          <div className="pt-8 lg:pt-0 lg:pl-16 flex flex-col justify-end space-y-4">
            <p className="text-sm font-light leading-relaxed opacity-60 uppercase tracking-widest">
              An workspace-oriented view for strategic tracking. Keep momentum high across immediate tasks, monthly objectives, and long-term milestones.
            </p>
            <div className="text-[10px] uppercase font-bold tracking-widest opacity-40 flex items-center gap-2">
              <Clock size={12} /> Real-time Client-side State Enabled
            </div>
          </div>
        </motion.section>

        {/* 3 Column Todo Board */}
        <div id="todo-columns-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: This Week */}
          <motion.div 
            id="todo-col-week"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col space-y-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-black/40 border border-primary/5 dark:border-white/5 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-primary/10 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/5 dark:bg-white/5 rounded-xl">
                  <Calendar size={18} className="text-primary/70 dark:text-white/70" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-medium tracking-tight">This Week</h3>
                  <p className="text-[10px] uppercase tracking-wider text-primary/40 dark:text-white/40">Immediate Task Execution</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                {todos.week.filter(t => !t.completed).length} open
              </span>
            </div>

            {/* Input form */}
            <form onSubmit={(e) => handleAddTodo('week', e)} className="relative flex items-center">
              <input 
                id="todo-input-week"
                type="text"
                placeholder="Commit to a weekly task..."
                value={inputs.week}
                onChange={(e) => setInputs(prev => ({ ...prev, week: e.target.value }))}
                className="w-full bg-transparent border-b border-primary/10 dark:border-white/10 py-3 pr-10 focus:outline-none focus:border-primary dark:focus:border-white text-sm font-light tracking-wide transition-colors"
              />
              <button 
                type="submit"
                id="todo-btn-add-week"
                aria-label="Add task to week"
                className="absolute right-0 p-1.5 opacity-40 hover:opacity-100 transition-opacity text-primary dark:text-white"
              >
                <Plus size={18} />
              </button>
            </form>

            {/* Task list */}
            <div className="space-y-3 min-h-[220px]">
              <AnimatePresence mode="popLayout">
                {todos.week.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center text-xs font-light tracking-wider text-primary/40 dark:text-white/40"
                  >
                    No weekly tasks planned
                  </motion.div>
                ) : (
                  todos.week.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="group flex items-center justify-between p-3.5 bg-zinc-50/50 dark:bg-white/2 rounded-2xl border border-primary/5 dark:border-white/2 transition-all hover:bg-zinc-50 dark:hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <button
                          type="button"
                          onClick={() => handleToggleTodo('week', item.id)}
                          aria-label={item.completed ? "Mark incomplete" : "Mark complete"}
                          className={`flex-none w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            item.completed 
                              ? 'bg-primary border-primary text-white dark:bg-white dark:border-white dark:text-primary scale-100' 
                              : 'border-primary/20 hover:border-primary/50 dark:border-white/20 dark:hover:border-white/50 bg-transparent'
                          }`}
                        >
                          {item.completed && <Check size={11} strokeWidth={3} />}
                        </button>
                        <span className={`text-sm font-light truncate select-none transition-all ${
                          item.completed 
                            ? 'line-through opacity-30 text-primary/70 dark:text-white/70' 
                            : 'text-primary dark:text-white'
                        }`}>
                          {item.text}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('week', item.id)}
                        aria-label="Delete todo"
                        className="opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity p-1 text-primary dark:text-white"
                      >
                        <Trash2 size={14} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Clear Button */}
            {todos.week.some(t => t.completed) && (
              <button 
                type="button"
                onClick={() => handleClearCompleted('week')}
                className="w-full py-2.5 rounded-xl border border-dotted border-primary/10 hover:border-primary/20 dark:border-white/10 dark:hover:border-white/20 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-all font-medium"
              >
                Clear Completed Weekly Tasks
              </button>
            )}
          </motion.div>

          {/* Column 2: This Month */}
          <motion.div 
            id="todo-col-month"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-black/40 border border-primary/5 dark:border-white/5 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-primary/10 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/5 dark:bg-white/5 rounded-xl">
                  <Clock size={18} className="text-primary/70 dark:text-white/70" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-medium tracking-tight">This Month</h3>
                  <p className="text-[10px] uppercase tracking-wider text-primary/40 dark:text-white/40">Milestones & Core Targets</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                {todos.month.filter(t => !t.completed).length} open
              </span>
            </div>

            {/* Input form */}
            <form onSubmit={(e) => handleAddTodo('month', e)} className="relative flex items-center">
              <input 
                id="todo-input-month"
                type="text"
                placeholder="Declare a monthly milestone..."
                value={inputs.month}
                onChange={(e) => setInputs(prev => ({ ...prev, month: e.target.value }))}
                className="w-full bg-transparent border-b border-primary/10 dark:border-white/10 py-3 pr-10 focus:outline-none focus:border-primary dark:focus:border-white text-sm font-light tracking-wide transition-colors"
              />
              <button 
                type="submit"
                id="todo-btn-add-month"
                aria-label="Add task to month"
                className="absolute right-0 p-1.5 opacity-40 hover:opacity-100 transition-opacity text-primary dark:text-white"
              >
                <Plus size={18} />
              </button>
            </form>

            {/* Task list */}
            <div className="space-y-3 min-h-[220px]">
              <AnimatePresence mode="popLayout">
                {todos.month.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center text-xs font-light tracking-wider text-primary/40 dark:text-white/40"
                  >
                    No monthly milestones planned
                  </motion.div>
                ) : (
                  todos.month.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="group flex items-center justify-between p-3.5 bg-zinc-50/50 dark:bg-white/2 rounded-2xl border border-primary/5 dark:border-white/2 transition-all hover:bg-zinc-50 dark:hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <button
                          type="button"
                          onClick={() => handleToggleTodo('month', item.id)}
                          aria-label={item.completed ? "Mark incomplete" : "Mark complete"}
                          className={`flex-none w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            item.completed 
                              ? 'bg-primary border-primary text-white dark:bg-white dark:border-white dark:text-primary scale-100' 
                              : 'border-primary/20 hover:border-primary/50 dark:border-white/20 dark:hover:border-white/50 bg-transparent'
                          }`}
                        >
                          {item.completed && <Check size={11} strokeWidth={3} />}
                        </button>
                        <span className={`text-sm font-light truncate select-none transition-all ${
                          item.completed 
                            ? 'line-through opacity-30 text-primary/70 dark:text-white/70' 
                            : 'text-primary dark:text-white'
                        }`}>
                          {item.text}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('month', item.id)}
                        aria-label="Delete todo"
                        className="opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity p-1 text-primary dark:text-white"
                      >
                        <Trash2 size={14} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Clear Button */}
            {todos.month.some(t => t.completed) && (
              <button 
                type="button"
                onClick={() => handleClearCompleted('month')}
                className="w-full py-2.5 rounded-xl border border-dotted border-primary/10 hover:border-primary/20 dark:border-white/10 dark:hover:border-white/20 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-all font-medium"
              >
                Clear Completed Monthly Milestones
              </button>
            )}
          </motion.div>

          {/* Column 3: 6 Months Goals */}
          <motion.div 
            id="todo-col-goals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-black/40 border border-primary/5 dark:border-white/5 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-primary/10 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/5 dark:bg-white/5 rounded-xl">
                  <Target size={18} className="text-primary/70 dark:text-white/70" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-medium tracking-tight">6 Months</h3>
                  <p className="text-[10px] uppercase tracking-wider text-primary/40 dark:text-white/40">Long-term Vision & Scale</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                {todos.goals.filter(t => !t.completed).length} open
              </span>
            </div>

            {/* Input form */}
            <form onSubmit={(e) => handleAddTodo('goals', e)} className="relative flex items-center">
              <input 
                id="todo-input-goals"
                type="text"
                placeholder="Cast a long-term goal..."
                value={inputs.goals}
                onChange={(e) => setInputs(prev => ({ ...prev, goals: e.target.value }))}
                className="w-full bg-transparent border-b border-primary/10 dark:border-white/10 py-3 pr-10 focus:outline-none focus:border-primary dark:focus:border-white text-sm font-light tracking-wide transition-colors"
              />
              <button 
                type="submit"
                id="todo-btn-add-goals"
                aria-label="Add long-term goal"
                className="absolute right-0 p-1.5 opacity-40 hover:opacity-100 transition-opacity text-primary dark:text-white"
              >
                <Plus size={18} />
              </button>
            </form>

            {/* Task list */}
            <div className="space-y-3 min-h-[220px]">
              <AnimatePresence mode="popLayout">
                {todos.goals.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center text-xs font-light tracking-wider text-primary/40 dark:text-white/40"
                  >
                    No long-term goals established
                  </motion.div>
                ) : (
                  todos.goals.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="group flex items-center justify-between p-3.5 bg-zinc-50/50 dark:bg-white/2 rounded-2xl border border-primary/5 dark:border-white/2 transition-all hover:bg-zinc-50 dark:hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <button
                          type="button"
                          onClick={() => handleToggleTodo('goals', item.id)}
                          aria-label={item.completed ? "Mark incomplete" : "Mark complete"}
                          className={`flex-none w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            item.completed 
                              ? 'bg-primary border-primary text-white dark:bg-white dark:border-white dark:text-primary scale-100' 
                              : 'border-primary/20 hover:border-primary/50 dark:border-white/20 dark:hover:border-white/50 bg-transparent'
                          }`}
                        >
                          {item.completed && <Check size={11} strokeWidth={3} />}
                        </button>
                        <span className={`text-sm font-light truncate select-none transition-all ${
                          item.completed 
                            ? 'line-through opacity-30 text-primary/70 dark:text-white/70' 
                            : 'text-primary dark:text-white'
                        }`}>
                          {item.text}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('goals', item.id)}
                        aria-label="Delete todo"
                        className="opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity p-1 text-primary dark:text-white"
                      >
                        <Trash2 size={14} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Clear Button */}
            {todos.goals.some(t => t.completed) && (
              <button 
                type="button"
                onClick={() => handleClearCompleted('goals')}
                className="w-full py-2.5 rounded-xl border border-dotted border-primary/10 hover:border-primary/20 dark:border-white/10 dark:hover:border-white/20 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-all font-medium"
              >
                Clear Completed 6 Months Goals
              </button>
            )}
          </motion.div>
          
        </div>

        {/* Minimal Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5 }}
          className="mt-20 border-t border-primary/10 dark:border-white/10 pt-8 text-center text-xs uppercase tracking-widest text-primary/60 dark:text-white/60"
        >
          Planning dashboard - 58WebDesign Workgroup
        </motion.div>

      </div>
    </motion.div>
  );
}
