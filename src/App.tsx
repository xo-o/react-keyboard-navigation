import React, { useEffect, useState } from "react";
import { cn } from "./lib/utils";
import { Command, Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { useKeyboardNavigation } from "@designcombo/use-keyboard-navigation";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./components/PageHeader";
import { elements, elements2 } from "./constants";

const App: React.FC = () => {
  const [selected, setSelected] = useState<any>();
  const { ref } = useKeyboardNavigation({
    selected: selected,
    setSelected: setSelected,
  });

  useEffect(() => {
    ref.current!.focus();
  }, []);

  return (
    <div
      tabIndex={0}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
      ref={ref}
      className="flex flex-col gap-8 p-8  bg-background outline-none overflow-auto"
    >
      <div>
        <div className="flex justify-between lg:max-w-4xl md:max-w-2xl sm:max-w-xl w-full m-auto">
          <div className="flex gap-2 items-center">
            <Command size={24} />
            <div className="font-medium text-sm">KNavigation</div>
          </div>
          <div className="flex gap-4">
            <Button variant={"ghost"} size={"icon"}>
              <Github />
            </Button>
          </div>
        </div>
      </div>
      <PageHeader>
        <PageHeaderHeading>useKeyboardNavigation</PageHeaderHeading>
        <PageHeaderDescription>
          Effortlessly navigate elements with arrow keys in React. Enhance user
          interaction and accessibility.
        </PageHeaderDescription>
        <div className="font-mono border py-2 px-4 rounded-md mt-8">
          pnpm i useKeyboardNavigation
        </div>
      </PageHeader>
      <div className="bg-card grid gap-4 grid-cols-6 p-6 lg:max-w-4xl md:max-w-2xl sm:max-w-xl w-full m-auto border">
        {elements.map((element) => (
          <div
            id={element.id.toString()}
            key={element.id}
            data-type="selectable"
            className={cn(
              "bg-background h-16  md:h-24 text-muted-foreground/50 place-content-center text-center w-full",
              selected === element.id
                ? "border-2 border-white"
                : "border border-border"
            )}
          >
            {element.id}
          </div>
        ))}
      </div>
      <div className="bg-card grid gap-4 grid-cols-5 p-4 lg:max-w-4xl md:max-w-2xl sm:max-w-xl w-full m-auto border">
        {elements2.map((element) => (
          <div
            id={element.id.toString()}
            key={element.id}
            data-type="selectable"
            className={cn(
              "bg-background h-24 md:h-32 text-muted-foreground/50 place-content-center text-center w-full",
              selected === element.id
                ? "border-2 border-white"
                : "border border-border"
            )}
          >
            {element.id}
          </div>
        ))}
      </div>
      <div className="h-16 text-center flex-none content-center text-muted-foreground">
        Created by @xo-o
      </div>
    </div>
  );
};

export default App;
