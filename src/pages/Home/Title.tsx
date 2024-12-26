import Meteors from "@/components/ui/meteors";
import HyperText from "@/components/ui/hyper-text";
import WordRotate from "@/components/ui/word-rotate";

const Title = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <Meteors number={30}/>
          <HyperText
            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
            text="Param Patil"
          />
          <WordRotate
            className="text-4xl font-bold whitespace-pre-wrap bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-600 bg-clip-text text-transparent "
            words={[
              "Software Developer",
              "Web Developer",
              "UI/UX Designer",
              "Tech Enthusiast",
              "Open Source Contributor",
              "Curious Learner",
            ]}
          />
        </div>
  )
}

export default Title