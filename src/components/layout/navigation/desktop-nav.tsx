'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const resources = [
  {
    title: 'Prompt Library',
    href: '/resources/prompt-library',
    description: 'Get inspiration for crafting effective prompts.',
  },
  {
    title: 'Blog',
    href: '/resources/blog',
    description: 'Latest insights, updates, and thought leadership.',
  },
  {
    title: 'Documentation',
    href: '/resources/docs',
    description: 'Learn how to integrate and use Centrus AI effectively.',
  },
  /* {
    title: 'Case Studies',
    href: '/resources/case-studies',
    description: 'See how leading companies use Centrus AI.',
  }, */
  
];

export function DesktopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-x-6">
        <NavigationMenuItem>
          <button
            onClick={() => handleNavigation('/solutions')}
            className={cn(
              'text-sm font-medium transition-colors hover:text-[#2b9ce5]',
              'cursor-pointer border-none bg-transparent',
              pathname === '/solutions'
                ? 'text-[#041b70] dark:text-[#2b9ce5]'
                : 'text-muted-foreground'
            )}
          >
            Solutions
          </button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <button
            onClick={() => handleNavigation('/integrations')}
            className={cn(
              'text-sm font-medium transition-colors hover:text-[#2b9ce5]',
              'cursor-pointer border-none bg-transparent',
              pathname === '/integrations'
                ? 'text-[#041b70] dark:text-[#2b9ce5]'
                : 'text-muted-foreground'
            )}
          >
            Integrations
          </button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <button
            onClick={() => handleNavigation('/pricing')}
            className={cn(
              'text-sm font-medium transition-colors hover:text-[#2b9ce5]',
              'cursor-pointer border-none bg-transparent',
              pathname === '/pricing'
                ? 'text-[#041b70] dark:text-[#2b9ce5]'
                : 'text-muted-foreground'
            )}
          >
            Pricing
          </button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              'text-sm font-medium transition-colors',
              'bg-transparent',
              'hover:!bg-[#2b9ce5]/10 hover:!text-[#2b9ce5]',
              pathname.startsWith('/resources')
                ? 'text-[#041b70] dark:text-[#2b9ce5]'
                : 'text-muted-foreground'
            )}
          >
            Resources
          </NavigationMenuTrigger>

          <NavigationMenuContent className="transition-all  duration-500 ease-in-out animate-in fade-in-0 fade-out-0 slide-in-from-top-5">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {resources.map(item => (
                <ListItem
                  key={item.title}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    pathname === item.href
                      ? 'text-[#041b70] dark:text-[#2b9ce5]'
                      : 'text-muted-foreground'
                  )}
                  title={item.title}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'> & { title: string }
>(({ className, title, children, onClick, ...props }, ref) => {
  return (
    <li>
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          'block w-full select-none space-y-1 rounded-md p-3 text-left',
          'leading-none no-underline outline-none transition-colors',
          'hover:bg-[#2b9ce5]/10 hover:text-[#2b9ce5]',
          'cursor-pointer border-none',
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </button>
    </li>
  );
});
ListItem.displayName = 'ListItem';
