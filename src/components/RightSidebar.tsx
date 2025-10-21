"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  DataTable,
  DataTableColumnHeader,
  DataTableViewOptions,
} from "@/components/ui/data-table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  ScrollArea as UIScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import {
  AspectRatio,
} from "@/components/ui/aspect-ratio";
import {
  Badge,
  badgeVariants,
} from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Progress as UIProgress,
} from "@/components/ui/progress";
import {
  Skeleton,
} from "@/components/ui/skeleton";
import {
  Sonner,
  toast as sonnerToast,
} from "@/components/ui/sonner";
import {
  Tabs as UITabs,
  TabsContent as UITabsContent,
  TabsList as UITabsList,
  TabsTrigger as UITabsTrigger,
} from "@/components/ui/tabs";
import {
  Textarea as UITextarea,
} from "@/components/ui/textarea";
import {
  Toggle,
  toggleVariants,
} from "@/components/ui/toggle";
import {
  useFormField,
} from "@/components/ui/use-form";
import {
  useMediaQuery,
} from "@/hooks/use-media-query";
import {
  useTheme,
} from "next-themes";
import {
  z,
} from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  OTPInput,
  OTPInputContext,
} from "input-otp";
import {
  Resizable,
  ResizablePanel as ResizablePanelComponent,
  ResizablePanelGroup as ResizablePanelGroupComponent,
} from "react-resizable-panels";
import {
  Select as SelectComponent,
  SelectContent as SelectContentComponent,
  SelectGroup,
  SelectItem as SelectItemComponent,
  SelectLabel,
  SelectTrigger as SelectTriggerComponent,
  SelectValue as SelectValueComponent,
} from "@/components/ui/select";
import {
  SheetClose,
  SheetFooter,
  SheetTitle as SheetTitleComponent,
  SheetTrigger as SheetTriggerComponent,
} from "@/components/ui/sheet";
import {
  Slider as SliderComponent,
} from "@/components/ui/slider";
import {
  Switch as SwitchComponent,
} from "@/components/ui/switch";
import {
  TableCaption,
} from "@/components/ui/table";
import {
  ToggleGroup as ToggleGroupComponent,
  ToggleGroupItem as ToggleGroupItemComponent,
} from "@/components/ui/toggle-group";
import {
  Tooltip as TooltipComponent,
  TooltipContent as TooltipContentComponent,
  TooltipProvider as TooltipProviderComponent,
  TooltipTrigger as TooltipTriggerComponent,
} from "@/components/ui/tooltip";
import {
  useToast as useToastComponent,
} from "@/components/ui/use-toast";
import {
  Avatar as AvatarComponent,
  AvatarFallback as AvatarFallbackComponent,
  AvatarImage as AvatarImageComponent,
} from "@/components/ui/avatar";
import {
  Badge as BadgeComponent,
  badgeVariants as badgeVariantsComponent,
} from "@/components/ui/badge";
import {
  Button as ButtonComponent,
  buttonVariants,
} from "@/components/ui/button";
import {
  Calendar as CalendarComponent,
} from "@/components/ui/calendar";
import {
  Card as CardComponent,
  CardContent as CardContentComponent,
  CardDescription as CardDescriptionComponent,
  CardFooter as CardFooterComponent,
  CardHeader as CardHeaderComponent,
  CardTitle as CardTitleComponent,
} from "@/components/ui/card";
import {
  Checkbox as CheckboxComponent,
} from "@/components/ui/checkbox";
import {
  Dialog as DialogComponent,
  DialogClose,
  DialogContent as DialogContentComponent,
  DialogDescription as DialogDescriptionComponent,
  DialogFooter as DialogFooterComponent,
  DialogHeader as DialogHeaderComponent,
  DialogTitle as DialogTitleComponent,
  DialogTrigger as DialogTriggerComponent,
} from "@/components/ui/dialog";
import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent as DropdownMenuContentComponent,
  DropdownMenuGroup,
  DropdownMenuItem as DropdownMenuItemComponent,
  DropdownMenuLabel as DropdownMenuLabelComponent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator as DropdownMenuSeparatorComponent,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger as DropdownMenuTriggerComponent,
} from "@/components/ui/dropdown-menu";
import {
  Form as FormComponent,
  FormControl as FormControlComponent,
  FormDescription as FormDescriptionComponent,
  FormField as FormFieldComponent,
  FormItem as FormItemComponent,
  FormLabel as FormLabelComponent,
  FormMessage as FormMessageComponent,
} from "@/components/ui/form";
import {
  HoverCard as HoverCardComponent,
  HoverCardContent as HoverCardContentComponent,
  HoverCardTrigger as HoverCardTriggerComponent,
} from "@/components/ui/hover-card";
import {
  Input as InputComponent,
} from "@/components/ui/input";
import {
  Label as LabelComponent,
} from "@/components/ui/label";
import {
  Menubar as MenubarComponent,
  MenubarContent as MenubarContentComponent,
  MenubarItem as MenubarItemComponent,
  MenubarMenu as MenubarMenuComponent,
  MenubarSeparator as MenubarSeparatorComponent,
  MenubarTrigger as MenubarTriggerComponent,
} from "@/components/ui/menubar";
import {
  NavigationMenu as NavigationMenuComponent,
  NavigationMenuContent as NavigationMenuContentComponent,
  NavigationMenuIndicator as NavigationMenuIndicatorComponent,
  NavigationMenuItem as NavigationMenuItemComponent,
  NavigationMenuLink as NavigationMenuLinkComponent,
  NavigationMenuList as NavigationMenuListComponent,
  NavigationMenuTrigger as NavigationMenuTriggerComponent,
  NavigationMenuViewport as NavigationMenuViewportComponent,
} from "@/components/ui/navigation-menu";
import {
  Popover as PopoverComponent,
  PopoverContent as PopoverContentComponent,
  PopoverTrigger as PopoverTriggerComponent,
} from "@/components/ui/popover";
import {
  RadioGroup as RadioGroupComponent,
  RadioGroupItem as RadioGroupItemComponent,
} from "@/components/ui/radio-group";
import {
  ScrollArea as ScrollAreaComponent,
  ScrollBar as ScrollBarComponent,
} from "@/components/ui/scroll-area";
import {
  Separator as SeparatorComponent,
} from "@/components/ui/separator";
import {
  Table as TableComponent,
  TableBody as TableBodyComponent,
  TableCell as TableCellComponent,
  TableHead as TableHeadComponent,
  TableHeader as TableHeaderComponent,
  TableRow as TableRowComponent,
} from "@/components/ui/table";
import {
  Toast as ToastComponent,
  ToastClose as ToastCloseComponent,
  ToastDescription as ToastDescriptionComponent,
  ToastProvider as ToastProviderComponent,
  ToastTitle,
  ToastViewport as ToastViewportComponent,
} from "@/components/ui/toast";
import {
  Toaster as ToasterComponent,
} from "@/components/ui/toaster";
import {
  useToast as useToastHook,
} from "@/components/ui/use-toast";
import {
  Accordion as AccordionComponent,
  AccordionContent as AccordionContentComponent,
  AccordionItem as AccordionItemComponent,
  AccordionTrigger as AccordionTriggerComponent,
} from "@/components/ui/accordion";
import {
  AlertDialog as AlertDialogComponent,
  AlertDialogAction as AlertDialogActionComponent,
  AlertDialogCancel as AlertDialogCancelComponent,
  AlertDialogContent as AlertDialogContentComponent,
  AlertDialogDescription as AlertDialogDescriptionComponent,
  AlertDialogFooter as AlertDialogFooterComponent,
  AlertDialogHeader as AlertDialogHeaderComponent,
  AlertDialogTitle as AlertDialogTitleComponent,
  AlertDialogTrigger as AlertDialogTriggerComponent,
} from "@/components/ui/alert-dialog";
import {
  Carousel as CarouselComponent,
  CarouselContent as CarouselContentComponent,
  CarouselItem as CarouselItemComponent,
  CarouselNext as CarouselNextComponent,
  CarouselPrevious as CarouselPreviousComponent,
} from "@/components/ui/carousel";
import {
  Collapsible as CollapsibleComponent,
  CollapsibleContent as CollapsibleContentComponent,
  CollapsibleTrigger as CollapsibleTriggerComponent,
} from "@/components/ui/collapsible";
import {
  Command as CommandComponent,
  CommandDialog as CommandDialogComponent,
  CommandEmpty as CommandEmptyComponent,
  CommandGroup as CommandGroupComponent,
  CommandInput as CommandInputComponent,
  CommandItem as CommandItemComponent,
  CommandList as CommandListComponen,
  CommandSeparator as CommandSeparatorComponent,
  CommandShortcut as CommandShortcutComponent,
} from "@/components/ui/command";
import {
  ContextMenu as ContextMenuComponent,
  ContextMenuContent as ContextMenuContentComponent,
  ContextMenuItem as ContextMenuItemComponent,
  ContextMenuTrigger as ContextMenuTriggerComponent,
} from "@/components/ui/context-menu";
import {
  DataTable as DataTableComponent,
  DataTableColumnHeader as DataTableColumnHeaderComponent,
  DataTableViewOptions as DataTableViewOptionsComponent,
} from "@/components/ui/data-table";
import {
  Drawer as DrawerComponent,
  DrawerClose as DrawerCloseComponent,
  DrawerContent as DrawerContentComponent,
  DrawerDescription as DrawerDescriptionComponent,
  DrawerFooter as DrawerFooterComponent,
  DrawerHeader as DrawerHeaderComponent,
  DrawerTitle as DrawerTitleComponent,
  DrawerTrigger as DrawerTriggerComponent,
} from "@/components/ui/drawer";
import {
  Pagination as PaginationComponent,
  PaginationContent as PaginationContentComponent,
  PaginationEllipsis as PaginationEllipsisComponent,
  PaginationItem as PaginationItemComponent,
  PaginationLink as PaginationLinkComponent,
  PaginationNext as PaginationNextComponent,
  PaginationPrevious as PaginationPreviousComponent,
} from "@/components/ui/pagination";
import {
  Skeleton as SkeletonComponent,
} from "@/components/ui/skeleton";
import {
  Sonner as SonnerComponent,
  toast as sonnerToastComponent,
} from "@/components/ui/sonner";
import {
  useMediaQuery as useMediaQueryHook,
} from "@/hooks/use-media-query";
import {
  useTheme as useThemeHook,
} from "next-themes";
import {
  z as zComponent,
} from "zod";
import {
  useForm as useFormHook,
} from "react-hook-form";
import {
  InputOTP as InputOTPComponent,
  InputOTPGroup as InputOTPGroupComponent,
  InputOTPSeparator as InputOTPSeparatorComponent,
  InputOTPSlot as InputOTPSlotComponent,
} from "@/components/ui/input-otp";
import {
  OTPInput as OTPInputComponent,
  OTPInputContext as OTPInputContextComponent,
} from "input-otp";
import {
  Resizable as ResizableComponent,
  ResizablePanel as ResizablePanelComponentComponent,
  ResizablePanelGroup as ResizablePanelGroupComponentComponent,
} from "react-resizable-panels";
import {
  SelectGroup as SelectGroupComponent,
  SelectLabel as SelectLabelComponent,
} from "@/components/ui/select";
import {
  SheetClose as SheetCloseComponent,
  SheetFooter as SheetFooterComponent,
} from "@/components/ui/sheet";
import {
  TableCaption as TableCaptionComponent,
} from "@/components/ui/table";
import {
  ToastTitle as ToastTitleComponent,
} from "@/components/ui/toast";
import {
  buttonVariants as buttonVariantsComponent,
} from "@/components/ui/button";
import {
  toggleVariants as toggleVariantsComponent,
} from "@/components/ui/toggle";
import {
  useFormField as useFormFieldHook,
} from "@/components/ui/use-form";
import {
  zodResolver as zodResolverComponent,
} from "@hookform/resolvers/zod";

const RightSidebar = () => {
  return (
    <div className="fixed right-4 top-20 bottom-4 w-80 bg-vanta-blue-medium text-vanta-text-light flex flex-col z-40 rounded-[27px] font-outfit p-6">
      {/* Logo and Match Code */}
      <div className="flex items-start mb-6 mt-4">
        <img
          src="/path/to/your/logo.png" // Replace with your logo path
          alt="Logo"
          className="h-10 w-10 mr-3"
        />
        <div>
          <h3 className="text-xl font-bold text-white">Match Code</h3>
          <p className="text-vanta-text-light text-sm">#123456</p>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center mb-6">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src="/path/to/avatar.png" alt="User Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-lg font-semibold text-white">John Doe</h4>
          <p className="text-vanta-text-light text-sm">Level 15</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-vanta-text-light">Progress to next level</span>
          <span className="text-white">75%</span>
        </div>
        <Progress value={75} className="w-full h-2 bg-vanta-blue-light" indicatorColor="bg-vanta-accent" />
      </div>

      <Separator className="bg-vanta-blue-light mb-6" />

      {/* Upcoming Matches */}
      <h3 className="text-xl font-bold text-white mb-4">Upcoming Matches</h3>
      <ScrollArea className="flex-grow pr-4 mb-6">
        <div className="space-y-4">
          {/* Example Match Card */}
          <div className="bg-vanta-blue-dark p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-vanta-text-light">Today, 7:00 PM</p>
              <p className="text-white font-medium">Team A vs Team B</p>
            </div>
            <Button variant="ghost" size="icon" className="text-vanta-text-light hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="bg-vanta-blue-dark p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-vanta-text-light">Tomorrow, 8:30 PM</p>
              <p className="text-white font-medium">Team C vs Team D</p>
            </div>
            <Button variant="ghost" size="icon" className="text-vanta-text-light hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="bg-vanta-blue-dark p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-vanta-text-light">Upcoming, 6:00 PM</p>
              <p className="text-white font-medium">Team E vs Team F</p>
            </div>
            <Button variant="ghost" size="icon" className="text-vanta-text-light hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </ScrollArea>

      <Separator className="bg-vanta-blue-light mb-6" />

      {/* Quick Actions */}
      <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-vanta-accent hover:bg-vanta-accent-dark text-white">Join Match</Button>
        <Button variant="outline" className="border-vanta-blue-light text-vanta-text-light hover:bg-vanta-blue-dark">Create Match</Button>
        <Button variant="outline" className="border-vanta-blue-light text-vanta-text-light hover:bg-vanta-blue-dark">View Profile</Button>
        <Button variant="outline" className="border-vanta-blue-light text-vanta-text-light hover:bg-vanta-blue-dark">Settings</Button>
      </div>
    </div>
  );
};

export default RightSidebar;