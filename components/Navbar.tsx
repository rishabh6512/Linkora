import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import NavItems from './NavItems'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='fixed w-full z-50 shadow-sm 
                        bg-white dark:bg-zinc-900 
                        border-b border-zinc-200 dark:border-zinc-800'>
            <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
                
                <div className='flex items-center gap-2'>
                    <Image
                        src={'/logo.png'}
                        alt="Logo"
                        width={35}
                        height={35}
                        className='dark:invert'
                    />
                    <div className='md:block hidden'>
                        <SearchInput />
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='md:block hidden'>
                        <NavItems />
                    </div>

                    <div>
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: 'ring-1 ring-zinc-300 dark:ring-zinc-700'
                                    }
                                }}
                            />
                        </SignedIn>

                        <SignedOut>
                            <Button
                                className='rounded-full 
                                           bg-zinc-100 text-zinc-900 
                                           hover:bg-zinc-200
                                           dark:bg-zinc-800 dark:text-zinc-100 
                                           dark:hover:bg-zinc-700'
                                variant='secondary'
                            >
                                <SignInButton />
                            </Button>
                        </SignedOut>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
