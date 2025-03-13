import {
  createCookie,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
  type LoaderFunctionArgs,
} from "react-router";

import type { Route } from "./+types/root";
import logo from "@meduza-bank/ui-kit/img/svg/icon-swag.svg";
import "@meduza-bank/ui-kit/style.css";
import "./app.css";
import { Header, Layout as DesignLayout, ScrollArea, TooltipProvider, LoadingDialog } from "@meduza-bank/ui-kit";
import { useEffect, useRef, useState } from "react";

export const themeCookie = createCookie("theme", {
  maxAge: 604_800, // one week
});

function useTheme(defaultState: "light" | "dark" | "system" = "system", defaultPreferState: "light" | "dark" = "light") {
  const loaderData = useLoaderData<{ theme: "light" | "dark" | "system" }>();
  const [theme, setTheme] = useState(loaderData.theme);
  const [themePrefers, setThemePrefers] = useState(theme === "system" ? "light" : theme);

  useEffect(() => {
    // localStorage.setItem("theme", theme);
    const setCookie = async () =>
      document.cookie = await themeCookie.serialize(theme);
    setCookie();
    if (theme === "system") {
      setThemePrefers(window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
      const listener = (event: MediaQueryListEvent) => {
        setThemePrefers(event.matches ? "dark" : "light");
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
      return window.matchMedia('(prefers-color-scheme: dark)').removeEventListener("change", listener)
    } else {
      setThemePrefers(theme);
    }
  }, [theme])

  return [themePrefers, setTheme]
}

const usePageLoading = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const [loaderShow, setShow] = useState(false);
  const [pageClose, setClose] = useState(false);
  const [pageNavigate, setNavigtate] = useState(false);
  const location = useLocation();
  let timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);
  let timeoutCloseId = useRef<NodeJS.Timeout | undefined>(undefined);
  let timeoutNavigation = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isNavigating) {
      // @ts-ignore
      if (navigation.location?.pathname === location?.pathname && navigation.location?.state === location?.state
        && navigation.location?.hash === location?.hash && navigation.location?.search === location?.search
      ) {
        timeoutNavigation.current = setTimeout(() => {
          setNavigtate(true);
        }, 1000);
        return () => {
          clearTimeout(timeoutNavigation.current);
        };
      } else {
        setNavigtate(true);
      }
    } else if (timeoutNavigation.current) {
      setNavigtate(false);
      clearTimeout(timeoutNavigation.current);
    } else {
      setNavigtate(false);
    }
  }, [isNavigating])

  useEffect(() => {
    if (pageNavigate) {
      timeoutId.current = setTimeout(() => {
        setShow(true);
      }, 1000);
      timeoutCloseId.current = setTimeout(() => {
        setClose(true)
      }, 175)
      return () => {
        clearTimeout(timeoutId.current);
        clearTimeout(timeoutCloseId.current);
      };
    } else if (timeoutId.current || timeoutCloseId.current) {
      clearTimeout(timeoutId.current);
      clearTimeout(timeoutCloseId.current);
    }
  }, [pageNavigate])

  return {
    pageNavigate,
    pageClose,
    loaderShow
  }
}

export async function loader(args: LoaderFunctionArgs) {
  const theme = await themeCookie.parse(args.request.headers.get("Cookie"));

  return {
    theme
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useTheme();
  const navigate = useNavigate();
  const { loaderShow, pageClose, pageNavigate } = usePageLoading();

  return (
    <html lang="ru" data-mode={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="any" type="image/svg+xml" href={logo} />
        <Meta />
        <Links />
      </head>
      <body>
        <TooltipProvider>
          {/* @ts-ignore */}
          <Header useTooltipProvider={false} themeSwitch={setTheme} homePage={() => navigate("/")} login={() => navigate("/auth/login")} />
          <ScrollArea className="max-h-dvh max-w-dvw">
            <div className="max-h-dvh max-w-dvw px-0.75">
              <DesignLayout isNavigate={pageNavigate}>
                {!pageClose && children}
                {loaderShow && <LoadingDialog />}
              </DesignLayout>
            </div>
          </ScrollArea>
        </TooltipProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
