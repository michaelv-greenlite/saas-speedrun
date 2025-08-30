import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPositioner,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPositioner,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Route = createFileRoute("/ui")({
  component: UIDemos,
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border rounded-lg p-4 space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function UIDemos() {
  const [enabled, setEnabled] = React.useState(false);
  const [name, setName] = React.useState("");
  const [checked, setChecked] = React.useState(true);
  const [framework, setFramework] = React.useState<string | null>(null);

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">UI Component Demos</h1>

      <Section title="Button">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Input + Label">
        <div className="grid gap-2 max-w-md">
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="text-sm text-muted-foreground">
            Value: {name || "—"}
          </div>
        </div>
      </Section>

      <Section title="Switch">
        <div className="flex items-center gap-3">
          <Switch checked={enabled} onCheckedChange={setEnabled} />
          <span className="text-sm">Enabled: {enabled ? "true" : "false"}</span>
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="accnts" className="max-w-xl">
          <TabsList>
            <TabsTrigger value="accnts">Accounts</TabsTrigger>
            <TabsTrigger value="pw">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="accnts">
            Manage your account settings here.
          </TabsContent>
          <TabsContent value="pw">Change your password here.</TabsContent>
        </Tabs>
      </Section>

      <Section title="Select">
        <Select value={framework} onValueChange={(v) => setFramework(v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectPositioner>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Web</SelectLabel>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
                <SelectSeparator />
                <SelectItem value="solid">Solid</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectPositioner>
        </Select>
        <div className="text-sm text-muted-foreground">
          Value: {framework || "—"}
        </div>
      </Section>

      <Section title="Accordion">
        <Accordion>
          <AccordionItem value="a">
            <AccordionTrigger>What is Base UI?</AccordionTrigger>
            <AccordionContent>
              Base UI is an unstyled, accessible component library.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>What is basecn?</AccordionTrigger>
            <AccordionContent>
              basecn brings shadcn/ui components rebuilt on Base UI.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="Dialog">
        <Dialog>
          <Button asChild>
            <DialogTrigger>Open dialog</DialogTrigger>
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogDescription>
                Short description of the dialog.
              </DialogDescription>
            </DialogHeader>
            <div className="py-2">Any content can go here.</div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Section title="Dropdown Menu">
        <DropdownMenu>
          <Button asChild variant="outline">
            <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
          </Button>
          <DropdownMenuPositioner>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={checked ? "on" : "off"}
                onValueChange={(v) => setChecked(v === "on")}
              >
                <DropdownMenuRadioItem value="on">
                  Radio On
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="off">
                  Radio Off
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Email notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenuPositioner>
        </DropdownMenu>
      </Section>

      <Section title="Tooltip">
        <Tooltip>
          <Button asChild variant="outline">
            <TooltipTrigger>Hover me</TooltipTrigger>
          </Button>
          <TooltipPositioner>
            <TooltipContent>Helpful tooltip text</TooltipContent>
          </TooltipPositioner>
        </Tooltip>
      </Section>
    </div>
  );
}
