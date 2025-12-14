import { jsxs, jsx } from "react/jsx-runtime";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { forwardRef, createElement, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function SocialLinks({ items: items2 }) {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4 gap-6", children: items2.map((item) => /* @__PURE__ */ jsx("a", { href: item.href, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: item.src,
      alt: item.alt,
      className: item.className ?? "size-8 bg-gray-300 border-2 border-gray-300 rounded-full hover:opacity-80"
    }
  ) }, item.href)) });
}
const github = "data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eGitHub%3c/title%3e%3cpath%20d='M12%20.297c-6.63%200-12%205.373-12%2012%200%205.303%203.438%209.8%208.205%2011.385.6.113.82-.258.82-.577%200-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422%2018.07%203.633%2017.7%203.633%2017.7c-1.087-.744.084-.729.084-.729%201.205.084%201.838%201.236%201.838%201.236%201.07%201.835%202.809%201.305%203.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93%200-1.31.465-2.38%201.235-3.22-.135-.303-.54-1.523.105-3.176%200%200%201.005-.322%203.3%201.23.96-.267%201.98-.399%203-.405%201.02.006%202.04.138%203%20.405%202.28-1.552%203.285-1.23%203.285-1.23.645%201.653.24%202.873.12%203.176.765.84%201.23%201.91%201.23%203.22%200%204.61-2.805%205.625-5.475%205.92.42.36.81%201.096.81%202.22%200%201.606-.015%202.896-.015%203.286%200%20.315.21.69.825.57C20.565%2022.092%2024%2017.592%2024%2012.297c0-6.627-5.373-12-12-12'/%3e%3c/svg%3e";
const linkedin = "data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z%20M17,20v19h-6V20H17z%20M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z%20M39,39h-6c0,0,0-9.26,0-10%20c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56%20c3.97,0,7.19,2.73,7.19,8.26V39z'/%3e%3c/svg%3e";
const discord = "data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eDiscord%3c/title%3e%3cpath%20d='M20.317%204.3698a19.7913%2019.7913%200%2000-4.8851-1.5152.0741.0741%200%2000-.0785.0371c-.211.3753-.4447.8648-.6083%201.2495-1.8447-.2762-3.68-.2762-5.4868%200-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077%200%2000-.0785-.037%2019.7363%2019.7363%200%2000-4.8852%201.515.0699.0699%200%2000-.0321.0277C.5334%209.0458-.319%2013.5799.0992%2018.0578a.0824.0824%200%2000.0312.0561c2.0528%201.5076%204.0413%202.4228%205.9929%203.0294a.0777.0777%200%2000.0842-.0276c.4616-.6304.8731-1.2952%201.226-1.9942a.076.076%200%2000-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077%200%2001-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743%200%2001.0776-.0105c3.9278%201.7933%208.18%201.7933%2012.0614%200a.0739.0739%200%2001.0785.0095c.1202.099.246.1981.3728.2924a.077.077%200%2001-.0066.1276%2012.2986%2012.2986%200%2001-1.873.8914.0766.0766%200%2000-.0407.1067c.3604.698.7719%201.3628%201.225%201.9932a.076.076%200%2000.0842.0286c1.961-.6067%203.9495-1.5219%206.0023-3.0294a.077.077%200%2000.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061%200%2000-.0312-.0286zM8.02%2015.3312c-1.1825%200-2.1569-1.0857-2.1569-2.419%200-1.3332.9555-2.4189%202.157-2.4189%201.2108%200%202.1757%201.0952%202.1568%202.419%200%201.3332-.9555%202.4189-2.1569%202.4189zm7.9748%200c-1.1825%200-2.1569-1.0857-2.1569-2.419%200-1.3332.9554-2.4189%202.1569-2.4189%201.2108%200%202.1757%201.0952%202.1568%202.419%200%201.3332-.946%202.4189-2.1568%202.4189Z'/%3e%3c/svg%3e";
const maskClassic = "/assets/mask-classic-CD5OIqXP.jpg";
const mask1 = "/assets/mask1-Kfsy1zqO.png";
const mask6 = "/assets/mask6-B8sXxDkI.png";
const mask7 = "/assets/mask7-Dm84-HgA.png";
function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex",
            orientation !== "horizontal" && " flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
const images = [maskClassic, mask1, mask6, mask7];
function CarouselAvatar() {
  const plugin = useRef(
    Autoplay({ delay: 6e3, stopOnInteraction: false, playOnInit: true })
  );
  return /* @__PURE__ */ jsx(
    Carousel,
    {
      opts: { loop: true },
      plugins: [plugin.current],
      className: "w-full size-42",
      children: /* @__PURE__ */ jsx(CarouselContent, { children: images.map((image, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "rounded-md size-42 min-w-42 bg-contain bg-no-repeat bg-center border-gray-500 brightness-90",
          style: { backgroundImage: `url(${image})` }
        },
        index
      )) })
    }
  );
}
const mother = "/assets/mother-DKbkTvGc.jpg";
const Lord = "/assets/Lord-CRXXw8bI.jpg";
const TheMockingofChristCarlBloch = "/assets/TheMockingofChrist-CarlBloch-ChmguD4V.webp";
const divineMercy = "/assets/divinemercy-DPB3-p9J.jpg";
const saintAugostin = "/assets/saintAugostin-CgDHd220.jpg";
const LordHand = "/assets/LordHand-CmbbGZyf.jpg";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx(X, {}),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children
    }
  ) });
}
const galeryImages = [
  {
    title: "Saint Mary - Mother of Jesus",
    src: mother,
    description: "E Maria disse: A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus, meu Salvador. (Lucas 1:46-47)"
  },
  {
    title: "The Mocking of Christ - Carl Bloch",
    src: TheMockingofChristCarlBloch,
    description: "Então cuspiram nele, e tomaram a cana, e batiam-lhe na cabeça. E, escarnecendo dele, despiram-lhe a capa, e o levaram para ser crucificado. (Mateus 27:30-31)"
  },
  {
    title: "Divine Mercy",
    src: divineMercy,
    description: "Bem-aventurados os misericordiosos, porque eles alcançarão misericórdia. (Mateus 5:7)"
  },
  {
    title: "Saint Augustin",
    src: saintAugostin,
    description: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto. (Isaías 55:6)"
  },
  {
    title: "Lord",
    src: Lord,
    description: "Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão por mim. (João 14:6)"
  },
  {
    title: "Lord's Hand",
    src: LordHand,
    description: "A mão do Senhor não está encolhida para que não possa salvar, nem surdo o seu ouvido para que não possa ouvir. (Isaías 59:1)"
  }
];
const Galery = () => {
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false);
  const handleCopyDescription = (description) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(description).then(() => {
        setCopyTooltipOpen(true);
        setTimeout(() => setCopyTooltipOpen(false), 777);
      }).catch(() => {
      });
    }
  };
  return /* @__PURE__ */ jsx("ul", { className: "columns-1  sm:columns-2 lg:columns-3  gap-4   lg:w-200 mx-auto", children: galeryImages.map((image) => /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("li", { className: "mb-4 break-inside-avoid", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: image.src,
        alt: image.title,
        className: "h-full hover:-translate-y-2 cursor-pointer transition mx-auto object-fill"
      }
    ) }, image.title) }),
    /* @__PURE__ */ jsx(DialogContent, { className: "border-gray-700 border-2 sm:max-w-106 bg-gray-950 text-gray-300", children: /* @__PURE__ */ jsxs(DialogHeader, { className: "gap-6", children: [
      /* @__PURE__ */ jsx(DialogTitle, { className: "text-center", children: image.title }),
      /* @__PURE__ */ jsx(
        DialogDescription,
        {
          onClick: () => handleCopyDescription(image.description),
          title: "Click to copy description",
          className: "italic cursor-pointer",
          children: /* @__PURE__ */ jsxs(Tooltip, { open: copyTooltipOpen, children: [
            /* @__PURE__ */ jsx(
              TooltipTrigger,
              {
                title: "",
                className: "cursor-pointer focus-visible:outline-none",
                children: image.description
              }
            ),
            /* @__PURE__ */ jsx(TooltipContent, { className: "fill-green-400 bg-green-400", children: /* @__PURE__ */ jsx("div", { className: "rounded-md text-gray-950 ", children: "Copiado!" }) })
          ] })
        }
      )
    ] }) })
  ] })) });
};
const items = [{
  href: "https://github.com/AlexandreXYZ",
  src: github,
  alt: "GitHub Logo, click to view my profile"
}, {
  href: "https://www.linkedin.com/in/alexandrexyz/",
  src: linkedin,
  alt: "LinkedIn Logo, click to connect"
}, {
  href: "https://discord.com/users/1005116348751421470",
  src: discord,
  alt: "Discord Logo, click to add me"
}];
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "relative bg-gray-950 w-full min-h-screen text-gray-300 p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-full mx-auto size-42 brightness-75 mt-8", children: /* @__PURE__ */ jsx(CarouselAvatar, {}) }),
    /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl my-2 font-medium ", children: "Alexandre XYZ" }),
    /* @__PURE__ */ jsx(SocialLinks, { items }),
    /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl mt-16 mb-8 font-medium ", children: "Galeria" }),
    /* @__PURE__ */ jsx(Galery, {})
  ] });
}
export {
  App as component
};
