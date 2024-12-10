"use client";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCheckoutStore } from "@/hooks/useCheckout";
interface Address {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  landmark: string;
  current: boolean;
}

const DelivaryDetails = () => {
  const { selectedAddress, changeAddress } = useCheckoutStore();

  const addres: Address[] = [
    {
      id: "1",
      fullName: "John Doe",
      phone: "9876543210",
      address: "123, Lorem Ipsum",
      city: "Bangalore",
      state: "Karnataka",
      zip: 560001,
      landmark: "Near Lorem Ipsum",
      current: true,
    },
    {
      id: "2",
      fullName: "Ankur Ghosh ",
      phone: "9876543210",
      address: "123, Lorem Ipsum",
      city: "Kolkata",
      state: "Kolkata",
      zip: 560001,
      landmark: "Near Lorem Ipsum",
      current: false,
    },
  ];
  const [address, setAddress] = React.useState<string | null>(null);

  const currentAddress = addres.filter((v) => v.current === true);

  function handelClick() {
    if (address) {
      changeAddress({
        addressId: address,
        showAddressPopup: false,
      });
      console.log("Continue");
    } else {
      console.log("Choose an address");
    }
  }
  function handelChangeAddress() {
    changeAddress({
      addressId: selectedAddress.addressId,
      showAddressPopup: !selectedAddress.showAddressPopup,
    });
  }
  function handelClose() {
    changeAddress({
      addressId: selectedAddress.addressId,
      showAddressPopup: !selectedAddress.showAddressPopup,
    });
  }
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        {selectedAddress.addressId ? (
          <p className="text-lg font-semibold">Delivary Informaton</p>
        ) : (
          <p className="text-lg font-semibold text-red-500">
            Choose an address
          </p>
        )}
        {selectedAddress.addressId && !selectedAddress.showAddressPopup && (
          <div>
            {addres
              .filter((v) => v.id === address)
              .map((v) => (
                <div key={v.id}>
                  <p>{v.fullName}</p>
                  <p>{v.address}</p>
                  <p>
                    {v.city},{v.state},{v.zip}
                  </p>
                </div>
              ))}
          </div>
        )}
        {selectedAddress.addressId && !selectedAddress.showAddressPopup ? (
          <button onClick={handelChangeAddress}>Change Address</button>
        ) : selectedAddress.addressId && selectedAddress.showAddressPopup ? (
          <>
            <button onClick={handelClose}>Close</button>
          </>
        ) : null}
      </div>
      <div
        className={cn("bg-gray-100 py-5 px-10 mx-5 rounded-lg", {
          hidden: !selectedAddress.showAddressPopup,
        })}
      >
        {addres.length > 0 && (
          <AddressRadioGroup
            values={addres}
            defaultValue={currentAddress[0].id}
            changeValue={setAddress}
          />
        )}

        <button>+ Add new address</button>
        <div className=" mt-10">
          <Button className="" type="button" onClick={handelClick}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DelivaryDetails;

function AddressRadioGroup({
  values,
  changeValue,
  defaultValue,
}: {
  values: Address[];
  defaultValue: string;
  changeValue: (value: string) => void;
}) {
  console.log("default", defaultValue);
  return (
    <div className=" space-y-3  max-w-3xl">
      <p className="text-lg font-semibold">Your address</p>
      <RadioGroup
        defaultValue={defaultValue}
        className=""
        onValueChange={(v) => {
          console.log("v", v);
          changeValue(v);
        }}
      >
        {values.map((v) => (
          <div
            className="flex items-center justify-between gap-4 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            key={v.id}
          >
            <div className="flex gap-4">
              <RadioGroupItem value={v.id} id="card" className="peer" />
              <Label htmlFor="card">
                {v.fullName}, {v.address}, {v.city}, {v.state}, {v.zip}
              </Label>
            </div>
            <div>
              <button>Edit</button>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
