'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[640px] flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer md:hidden fixed right-6 top-8 z-50"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none white w-full block md:hidden">
          <Link href="/" className="flex items-center justify-center">
          <Image
      src='/icons/LorisMediaLogo_purple.png'
      width={300}
      height={156}
      alt='Loris Media Logo'
      className='justify-self-center'
      
      />
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-purple-1 items-center text-xl">
                {navLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg w-full max-w-60 font-medium',
                          {
                            'font-extrabold ': isActive,
                          }
                        )}
                      >
                      {item.icon}  
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;