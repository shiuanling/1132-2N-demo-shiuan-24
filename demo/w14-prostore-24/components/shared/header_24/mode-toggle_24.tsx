'use client'

import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react'

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
    DropdownMenuSeparator, 
} from '@/components/ui/dropdown-menu';


const ModeToggle_24 = () => {
    const { theme, setTheme} = useTheme();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                { theme === 'system' ? (
                    <SunMoon />
                ) : theme == 'dark' ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme('dark')}
        className='justify-between'>
            Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
        checked={theme === 'light'}
        onCheckedChange={() => setTheme('light')}
        className='justify-between'>
            Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
        checked={theme === 'system'}
        onCheckedChange={() => setTheme('system')}
        className='justify-between'>
            System
        </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle_24;
