"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import { Button } from "@/components/ui/button";
import { showToast } from "@/lib/toast";

interface EthereumRequest {
  method: string;
  params?: unknown[] | object;
}

interface WindowWithEthereum extends Window {
  ethereum?: {
    isMetaMask?: boolean;
    request?: (args: EthereumRequest) => Promise<unknown>;
  };
}

export function ConnectWalletButton() {
  const { isConnected, address } = useAccount();
  const { connect, isPending, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    setMounted(true);

    const checkMetaMaskInstalled = () => {
      const { ethereum } = window as WindowWithEthereum;
      const isMetaMaskAvailable = !!ethereum && !!ethereum.isMetaMask;
      setIsMetaMaskInstalled(isMetaMaskAvailable);
    };

    if (typeof window !== "undefined") {
      checkMetaMaskInstalled();
    }
  }, []);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 2)}..${address.slice(-4)}`;
  };

  const handleConnect = () => {
    if (!isMetaMaskInstalled) {
      showToast("MetaMask is not installed in your browser", "error", {
        description: "You need to install MetaMask to connect your wallet",
        duration: 5000,
        action: {
          label: "Install",
          onClick: (e) => {
            e.preventDefault();
            window.open("https://metamask.io/download/", "_blank");
          },
        },
      });
      return;
    }

    try {
      if (connectors.length > 0) {
        const metamaskConnector = connectors[0];
        connect({ connector: metamaskConnector });
      } else {
        console.error("No connectors available");
      }
    } catch (err) {
      console.error("Connection error:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (error) {
      showToast("Failed to connect. Please try again.", "error", {
        duration: 5000,
        action: {
          label: "Try again",
          onClick: () => {
            window.location.reload();
          },
        },
      });
    }
  }, [error]);

  if (!mounted) {
    return (
      <div className="flex flex-col">
        <Button className="text-white cursor-pointer transition-colors bg-gradient-to-r from-[#674EFF] to-[#714EBD] rounded-full border-2 border-[#9A8AFE] relative shadow-[0px_1.15px_20.39px_0px_#FFFFFF6E_inset] hover:bg-gradient-to-r hover:from-[#7E6AFF] hover:to-[#8A6AD4] md:gap-2 z-30 sm:px-5 sm:py-4 sm:text-md xl:h-[60px] p-1 gap-0 text-xs">
          <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-6 h-1 bg-[#fff] rounded blur-sm transition-all duration-300" />
          Connect Wallet
        </Button>
      </div>
    );
  }

  if (isConnected) {
    return (
      <div className="relative" ref={dropdownRef}>
        <Button
          className="text-white cursor-pointer transition-colors bg-gradient-to-r from-[#674EFF] to-[#714EBD] md:px-6 md:py-3 rounded-full border-2 border-[#9A8AFE] relative shadow-[0px_1.15px_20.39px_0px_#FFFFFF6E_inset] hover:bg-gradient-to-r hover:from-[#7E6AFF] hover:to-[#8A6AD4] sm:gap-2 z-30 sm:px-5 sm:py-4 sm:text-md xl:h-[60px] p-1 gap-0 text-xs"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-6 h-1 bg-[#fff] rounded blur-sm transition-all duration-300" />
          <Image
            src="/images/hero/base-logo.svg"
            alt="Klink Finance"
            width={24}
            height={24}
          />

          {address ? formatAddress(address) : ""}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>

        {isOpen && (
          <div className="absolute mt-2 w-full min-w-[150px] bg-white border border-[#9A8AFE] rounded-md shadow-lg z-40 overflow-hidden">
            <div
              className="p-2 hover:bg-white text-red-500 cursor-pointer transition-colors text-center"
              onClick={() => {
                disconnect();
                setIsOpen(false);
              }}
            >
              Disconnect
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Button
        onClick={handleConnect}
        disabled={isPending}
        className="text-white cursor-pointer transition-colors bg-gradient-to-r from-[#674EFF] to-[#714EBD] rounded-full border-2 border-[#9A8AFE] relative shadow-[0px_1.15px_20.39px_0px_#FFFFFF6E_inset] hover:bg-gradient-to-r hover:from-[#7E6AFF] hover:to-[#8A6AD4] md:gap-2 z-30 sm:px-5 sm:py-4 sm:text-md xl:h-[60px] p-1 gap-0 text-xs"
      >
        <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-6 h-1 bg-[#fff] rounded blur-sm transition-all duration-300" />
        {isPending ? "Connecting..." : "Connect Wallet"}
      </Button>
    </div>
  );
}
