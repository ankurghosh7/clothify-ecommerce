"use client";

import React from "react";
import { CheckIcon, ChevronDown, XCircle, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CommandSeparator } from "cmdk";
const permissions = [
  {
    label: "Product Read",
    value: "products:read",
  },
  {
    label: "Product Write",
    value: "products:write",
  },
  {
    label: "Product Update",
    value: "products:update",
  },
  {
    label: "Product Publish",
    value: "products:publish",
  },
  {
    label: "Product Unpublish",
    value: "products:unpublish",
  },
  {
    label: "Order Read",
    value: "orders:read",
  },
  {
    label: "Order Update",
    value: "orders:update",
  },
  {
    label: "Coupon Read",
    value: "coupons:read",
  },
  {
    label: "Coupon Write",
    value: "coupons:write",
  },
  {
    label: "Coupon Delete",
    value: "coupons:delete",
  },
  {
    label: "Coupon Publish",
    value: "coupons:publish",
  },
  {
    label: "Coupon Unpublish",
    value: "coupons:unpublish",
  },
  {
    label: "Customer Read",
    value: "customers:read",
  },
  {
    label: "Category Read",
    value: "categorys:read",
  },
  {
    label: "Category Write",
    value: "categorys:write",
  },
  {
    label: "Category Publish",
    value: "categorys:publish",
  },
  {
    label: "Category Unpublish",
    value: "categorys:unpublish",
  },
  {
    label: "User Read",
    value: "users:read",
  },
  {
    label: "User Create",
    value: "users:create",
  },
  {
    label: "User Update",
    value: "users:update",
  },
];
const AdminUserPermissionSelect = ({
  onValueChange,
}: {
  onValueChange: (v: string[]) => void;
}) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const selectedValuesSet = React.useRef(new Set(selectedValues));
  const [open, setOpen] = React.useState(false);

  //
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      setOpen(true);
    }
  };

  const toggleOption = (value: string) => {
    if (selectedValuesSet.current.has(value)) {
      selectedValuesSet.current.delete(value);
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      selectedValuesSet.current.add(value);
      setSelectedValues([...selectedValues, value]);
    }
    onValueChange(Array.from(selectedValuesSet.current));
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-background hover:bg-card"
        >
          {selectedValues.length > 0 ? (
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-wrap items-center">
                {selectedValues.map((value) => {
                  const option = permissions?.find((o) => o.value === value);
                  return (
                    <Badge
                      key={value}
                      className={cn(
                        "m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-foreground/10 drop-shadow-md text-foreground bg-card hover:bg-card/80"
                      )}
                    >
                      {option?.label}
                      <XCircle
                        className="ml-2 h-4 w-4 cursor-pointer"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleOption(value);
                        }}
                      />
                    </Badge>
                  );
                })}
              </div>
              {/*  */}
              <div className="flex items-center justify-between">
                {/* remove all select values button */}
                <button
                  onClick={(event) => {
                    setSelectedValues([]);
                    selectedValuesSet.current.clear();
                    onValueChange([]);
                    event.stopPropagation();
                  }}
                  type="button"
                >
                  <XIcon className="h-4 mx-2 cursor-pointer text-muted-foreground" />
                </button>
                {/*  */}
                <Separator
                  orientation="vertical"
                  className="flex min-h-6 h-full"
                />
                {/*  */}
                <ChevronDown className="h-4 mx-2 cursor-pointer text-muted-foreground" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full mx-auto">
              <span className="text-sm text-muted-foreground mx-3">
                Select permissions
              </span>
              <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            onKeyDown={handleInputKeyDown}
          />
          <CommandList className="overflow-y-scroll">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {permissions.map((permission) => {
                const isSelected = selectedValuesSet.current.has(
                  permission.value
                );

                return (
                  <CommandItem
                    key={permission.label}
                    onSelect={() => toggleOption(permission.value)}
                    style={{
                      pointerEvents: "auto",
                      opacity: 1,
                    }}
                    className="cursor-pointer"
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className="h-4 w-4" />
                    </div>

                    <span>{permission.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
            {/* select filed close and clear buttons group */}
            <CommandGroup>
              <div className="flex items-center justify-between">
                {selectedValues.length > 0 && (
                  <CommandItem
                    onSelect={() => {
                      setSelectedValues([]);
                      selectedValuesSet.current.clear();
                      onValueChange([]);
                    }}
                    style={{
                      pointerEvents: "auto",
                      opacity: 1,
                    }}
                    className="flex-1 justify-center cursor-pointer"
                  >
                    Clear
                  </CommandItem>
                )}
                <Separator
                  orientation="vertical"
                  className="flex min-h-6 h-full"
                />
                <CommandItem
                  onSelect={() => setOpen(false)}
                  style={{
                    pointerEvents: "auto",
                    opacity: 1,
                  }}
                  className="flex-1 justify-center cursor-pointer"
                >
                  Close
                </CommandItem>
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default AdminUserPermissionSelect;
