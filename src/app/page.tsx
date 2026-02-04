"use client";

import { useEffect, useRef, useState } from "react";
import LinkComp from "@/components/LinkComp";
import Input from "@/components/Input";
import ShareButton from "@/components/ShareButton";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import useInputHeight from "@/hooks/useInputHeight";

export default function Home() {
  const [input, setInput] = useState("");
  const lastMessage = useRef<HTMLDivElement>(null);
  const inputSectionRef = useRef<HTMLDivElement>(null);
  const prevLength = useRef<number>(0);
  const inputHeight = useInputHeight({ refObj: inputSectionRef });

  const getSavedData = async () => {
    const res = await fetch("/api/get-texts");
    const data: { value: string; id: string }[] = await res.json();
    return data;
  };

  const saveTheText = async () => {
    if (!input) return;

    await fetch("/api/save-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: input }),
    });
  };

  const deleteText = async (id: string) => {
    const res = await fetch("/api/delete-text", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const result = await res.json();

    if (result.success) {
      setInput("");
      refetch();
    }
  };

  const {
    data,
    isLoading: isLoadingTexts,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryFn: getSavedData,
    queryKey: ["savedData"],
    retry: 0,
  });
  const sortedData = data?.sort((a, b) => Number(a.id) - Number(b.id));

  const { mutate: saveTextInServerMutate, isPending: isSavingTheText } =
    useMutation({
      mutationFn: saveTheText,
      onSuccess: () => {
        setInput("");
        refetch();
      },
    });

  const { mutate: deleteTextInServer, isPending: isDeletingTheText } =
    useMutation({
      mutationFn: (id: string) => deleteText(id),
      onSuccess: () => {
        refetch();
        toast.success("Message deleted successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
    });

  const saveTextInServer = () => {
    if (!input.trim()) return;
    saveTextInServerMutate();
  };

  useEffect(() => {
    if (!data) return;

    if (data.length > prevLength.current) {
      lastMessage.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    prevLength.current = data.length;
  }, [data]);

  return (
    <>
      <main className="flex  flex-col selection:bg-green-400 selection:text-black ">
        <motion.div className="flex grow flex-col  max-w-175 w-full mx-auto overflow-x-hidden px-4 pt-6 ">
          {error ? (
            <div className="border border-red-500 p-4 rounded-2xl text-red-500   shadow-[0_0_10px_2px_var(--tw-shadow-color),inset_0_0_6px_4px_var(--tw-shadow-color)] shadow-red-500 select-none w-full text-center bg-red-500/20">
              {error.message}
            </div>
          ) : isLoadingTexts ? (
            <Loading />
          ) : sortedData && sortedData.length > 0 ? (
            sortedData.map((item) => (
              <LinkComp
                handleDelete={deleteTextInServer}
                isDeletingTheText={isDeletingTheText}
                key={item.id}
                itemId={item.id}
                itemValue={item.value}
              />
            ))
          ) : (
            <p className="border border-yellow-300 p-4 rounded-2xl text-yellow-400   shadow-[0_0_10px_2px_var(--tw-shadow-color),inset_0_0_6px_4px_var(--tw-shadow-color)] shadow-yellow-400 select-none w-full text-center bg-yellow-500/20">
              There are no saved data! Start by sharing something from bottom
            </p>
          )}
          {isFetching && !isLoadingTexts && <Loading />}
          <div
            style={{ height: `${(inputHeight || 40) + 10}px` }}
            className="w-full block shrink-0"
          ></div>
          <div ref={lastMessage} className="invisible h-1 w-10 mt-0" />
        </motion.div>
      </main>
      <div
        ref={inputSectionRef}
        className="flex backdrop-blur-xs rounded-2xl overflow-hidden bg-neutral-950/10 shadow-[0_0_10px_2px] shadow-black/10 fixed bottom-0 left-0  flex-col sm:flex-row items-stretch sm:items-center justify-center w-full pb-4 pt-1 gap-4  "
      >
        <Input
          handleEnter={saveTextInServer}
          isSavingTheText={isSavingTheText}
          inputValue={input}
          setInputValue={setInput}
        />
        <ShareButton
          isSavingTheText={isSavingTheText}
          handleClick={saveTextInServer}
        />
      </div>
    </>
  );
}
