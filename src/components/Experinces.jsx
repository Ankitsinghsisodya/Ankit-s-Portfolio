
import { motion } from "framer-motion"

const Experinces = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Experiences</h2>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity: 1, x:0}}
            initial= {{opacity: 0, x:100}}
            transition= {{duration: 0.5}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start exp">
  <motion.div 
    className="w-full max-w-2xl p-6 space-y-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h3 
      className="text-2xl font-semibold text-slate-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Intern | <a href='https://www.tle-eliminators.com/'>TLE Eliminator</a>
    </motion.h3>
    
    <motion.p 
      className="text-slate-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <span className="font-medium">Part-Time (3 months)</span> | 
      <span className="italic">Dec 2024</span>
    </motion.p>

    <motion.ul 
      className="list-disc pl-6 space-y-2 text-slate-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
            <li>Assist students in resolving DSA-related doubts</li>
            <li>Help improve students' competitive programming skills</li>
            <li>Guide students in preparing for competitive coding challenges</li>
            <li>Contribute to the educational content and resources for students</li>
            <li>Received the “Top Mentor” appreciation for four consecutive weeks.</li>
    </motion.ul>
  </motion.div>
</div>
                </motion.div>
        </div>
    </div>
  )
}

export default Experinces;