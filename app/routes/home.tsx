import type { Route } from "./+types/home";
import { Button, Input, LineBlock, PageBlock, ScrollArea, ScrollBar, Badge } from "@meduza-bank/ui-kit";
import icon from "@meduza-bank/ui-kit/img/svg/icon.svg";
import { ChevronRightIcon, SettingsIcon, SearchIcon } from "lucide-react";
import { Form, useNavigate } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Главная | НБМ" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="gap-2 lg:grid-cols-5 flex w-full flex-col lg:grid">
      <div className="flex flex-col gap-2">
        <PageBlock className="animate-in">
          <div className="flex justify-between items-center mb-2 p-1">
            <h3 className="font-semibold text-lg">Курсы к Левро</h3>
            <Button variant="ghost" className="group" size="icon"><SettingsIcon className="w-5 group-hover:rotate-45 duration-150 h-5" /></Button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>10S за L</p>
                <p className="text-sm text-muted-foreground">Сабли</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>10E за L</p>
                <p className="text-sm text-muted-foreground">Техномарки</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>10K за L</p>
                <p className="text-sm text-muted-foreground">Кеклары</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>10G за L</p>
                <p className="text-sm text-muted-foreground">Гарди</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>10M за L</p>
                <p className="text-sm text-muted-foreground">Мемлар</p>
              </div>
            </div>
            <div className="flex gap-2 cursor-pointer select-none group">
              <div className="flex items-center rounded h-12 w-12 bg-muted justify-center">
                <ChevronRightIcon />
              </div>
              <div className="flex group-hover:ml-1 duration-150 items-center">
                <p>Больше</p>
              </div>
            </div>
          </div>
        </PageBlock>

      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <PageBlock className="flex animate-in flex-col gap-2">
          <div className="flex justify-between items-center mb-2 p-1">
            <div className="flex gap-2">
              <h3 className="font-semibold text-lg">Сводка новостей</h3>
              <Badge>Экономика</Badge>
            </div>
            <Button variant="ghost" className="group" size="icon"><SettingsIcon className="w-5 group-hover:rotate-45 duration-150 h-5" /></Button>
          </div>
          <LineBlock>
            <ScrollArea className="flex">
              <div className="flex gap-2">
                <LineBlock className="flex w-sm h-60">

                </LineBlock>
                <LineBlock className="flex w-xs h-60">

                </LineBlock>
                <LineBlock className="flex w-xs h-60">

                </LineBlock>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </LineBlock>
        </PageBlock>
        <PageBlock className="flex animate-in gap-2 items-center">
          <img src={icon} alt="SVG ICON" className="h-8 w-8" />
          <Form action="/search" className="flex flex-1 gap-2 items-center">
            <Input className="flex-1 h-10" name="query" placeholder="Поиск..." />
            <Button type="submit" size="icon" variant="outline">
              <SearchIcon />
            </Button>
          </Form>
        </PageBlock>
        <PageBlock className="animate-in">
          <div className="flex justify-between items-center mb-2 p-1">
            <div className="flex gap-2">
              <h3 className="font-semibold text-lg">Самые продаваемые товары</h3>
              <Badge>Компьютерная техника</Badge>
            </div>
            <Button variant="ghost" className="group" size="icon"><SettingsIcon className="w-5 group-hover:rotate-45 duration-150 h-5" /></Button>
          </div>
          <LineBlock>
            <ScrollArea className="flex">
              <div className="flex gap-2">
                <LineBlock className="flex w-sm h-60">

                </LineBlock>
                <LineBlock className="flex w-xs h-60">

                </LineBlock>
                <LineBlock className="flex w-xs h-60">

                </LineBlock>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </LineBlock>
        </PageBlock>
      </div>
      <div className="gap-2 flex flex-col">
        <PageBlock className="animate-in">
          <div className="flex justify-between items-center mb-2 p-1">
            <h3 className="font-semibold text-lg">ТОП стран по бюджету</h3>
            <Button variant="ghost" className="group" size="icon"><SettingsIcon className="w-5 group-hover:rotate-45 duration-150 h-5" /></Button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>Ловушкинск</p>
                <p className="text-sm text-muted-foreground">10L</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>Северск</p>
                <p className="text-sm text-muted-foreground">10L</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>Эпикана</p>
                <p className="text-sm text-muted-foreground">10L</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>Гардерния</p>
                <p className="text-sm text-muted-foreground">10L</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="https://placehold.co/200" className="rounded h-12 w-12" alt="Сабли" />
              <div className="flex flex-col">
                <p>Кекляндия</p>
                <p className="text-sm text-muted-foreground">10L</p>
              </div>
            </div>
            <div className="flex gap-2 cursor-pointer select-none group">
              <div className="flex items-center rounded h-12 w-12 bg-muted justify-center">
                <ChevronRightIcon />
              </div>
              <div className="flex group-hover:ml-1 duration-150 items-center">
                <p>Больше</p>
              </div>
            </div>
          </div>
        </PageBlock>
        <div className="aspect-[9/2] w-full animate-in cursor-pointer group border rounded bg-center bg-cover" style={{ backgroundImage: "url(https://placehold.co/900x200)" }}>
          <div className="text-xs select-none group-hover:bg-background/70 group-hover:text-foreground duration-150 text-foreground/0 bg-background/0 p-0.5 px-1 rounded-sm m-0.5 inline-block">НБМ Реклама</div>
        </div>
      </div>
    </div>
  )
}
