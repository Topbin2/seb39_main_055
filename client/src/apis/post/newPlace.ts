/* eslint-disable no-plusplus */
import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { ErrorResponse } from "../../types";
import { axiosInstance } from "../../utils/axiosInstance";

export const getImgUrl = async (files: FileList): Promise<string[]> => {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  const { data } = await axiosInstance.post("/v1/user/upload", formData, {
    headers: {
      tokenNeeded: true,
      "Content-Type": "multipart/form-data",
    },
  });

  return data.data;
};

export const useNewPlace = () => {
  const { data: imageUrlData, mutate: fileMutate } = useMutation<
    string[],
    AxiosError<ErrorResponse>,
    FileList
  >((files) => getImgUrl(files));

  return { fileMutate, imageUrlData };
};
