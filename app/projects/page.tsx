import { jobs, startups } from "@/services/experience";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import Project from "./components/Project";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 row-span-8 lg:row-span-11">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-md mt-2">A list of all my projects</p>
      </div>
      <Tabs
        className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col"
        defaultValue="jobs"
      >
        <TabsList className="flex p-1 space-x-1 rounded-2xl  m-auto ">
          <TabsTrigger className="flex-1 rounded-xl" value="jobs">
            Freelance
          </TabsTrigger>
          <TabsTrigger className="flex-1 rounded-xl" value="startups">
            Hobby
          </TabsTrigger>
          <TabsTrigger className="flex-1 rounded-xl" value="opensource">
            Open Source
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="flex flex-col items-center gap-6 mt-6"
          value="jobs"
        >
          {jobs.map((exp, index) => (
            <Project key={index} {...exp} />
          ))}
        </TabsContent>
        <TabsContent
          className="flex flex-col items-center gap-6 mt-6"
          value="startups"
        >
          {startups.map((exp, index) => (
            <Project key={index} {...exp} />
          ))}
        </TabsContent>
        <TabsContent
          className="flex flex-col items-center gap-6 mt-6"
          value="opensource"
        >
          {startups.map((exp, index) => (
            <Project key={index} {...exp} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
