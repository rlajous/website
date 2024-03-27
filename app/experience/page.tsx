import { jobs, startups } from "@/services/experience";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import Experience from "./components/Experience";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 row-span-8 lg:row-span-11">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="text-md text-gray-500 mt-2">
          A timeline of my professional journey
        </p>
      </div>
      <Tabs
        className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col"
        defaultValue="jobs"
      >
        <TabsList className="flex p-1 space-x-1 bg-blue-900/20 rounded-2xl  m-auto ">
          <TabsTrigger className="flex-1 rounded-xl" value="jobs">
            Jobs
          </TabsTrigger>
          <TabsTrigger className="flex-1 rounded-xl" value="startups">
            Startups
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="flex flex-col items-center gap-6 mt-6"
          value="jobs"
        >
          {jobs.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
        </TabsContent>
        <TabsContent
          className="flex flex-col items-center gap-6 mt-6"
          value="startups"
        >
          {startups.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
