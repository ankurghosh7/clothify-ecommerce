import { EPaymentMethod } from "@/lib/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Define types for state
interface AddressStateProps {
  addressId: string | null;
  showAddressPopup: boolean;
}

interface PaymentStateProps {
  method: EPaymentMethod | null;
  showPaymentPopup: boolean;
}

// Define the Zustand store
interface ChechoutStore {
  selectedAddress: AddressStateProps;
  selectedPayment: PaymentStateProps;
  changeAddress: (address: Partial<AddressStateProps>) => void;
  changePayment: (payment: Partial<PaymentStateProps>) => void;
}

// Create the store using Immer middleware
export const useCheckoutStore = create(
  immer<ChechoutStore>((set) => ({
    selectedAddress: {
      addressId: null,
      showAddressPopup: true,
    },
    selectedPayment: {
      method: null,
      showPaymentPopup: false,
    },
    changeAddress: (address) =>
      set((state) => {
        state.selectedAddress = {
          ...state.selectedAddress,
          ...address,
        };
        if (address.addressId !== undefined) {
          state.selectedPayment.showPaymentPopup = address.addressId
            ? true
            : false;
        }
      }),
    changePayment: (payment) =>
      set((state) => {
        state.selectedPayment = {
          ...state.selectedPayment,
          ...payment,
        };
      }),
  }))
);
