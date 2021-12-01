import React, { useState } from "react";

import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Box, Text, Button } from "@chakra-ui/react";
import useApi from "../hooks/useApi";
import imagesApi from "../api/images";
import { Loader, CarDetails } from "../components";

const Home = () => {
  const imageApi = useApi(imagesApi.postImage);
  const [error, setError] = useState();
  const [files, setFiles] = useState([]);

  const imageUploadHandler = async () => {
    setError();
    const result = await imageApi.request(files[0]);
    console.log(result);
    if (!result.ok) {
      setError(result.data || "Something went wrong");
      return;
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const data = imageApi.data;
  return (
    <Box display="flex" flexDirection="column" p="10px" alignItems="center">
      <Loader visible={imageApi.loading} />
      <Text fontSize="xl">Find Car Details</Text>
      <ImageBox>
        <div className="box" {...getRootProps()} data-testid="box">
          <input {...getInputProps()} data-testid="input" />
          {files &&
            files.map((file, index) => <img src={file.preview} key={index} />)}

          {files.length > 0 ? (
            ""
          ) : isDragActive ? (
            <p>Drop the image here ...</p>
          ) : (
            <>
              <p>Drag and drop the image here or</p>
              <p> click to select image</p>
            </>
          )}
        </div>
      </ImageBox>

      <Button
        onClick={imageUploadHandler}
        colorScheme="pink"
        variant="solid"
        disabled={!files[0]}
      >
        Submit
      </Button>

      {data.car && <CarDetails data={data} />}
    </Box>
  );
};

const ImageBox = styled.div`
  margin: 2rem;
  border-radius: 20px;
  border: 2px solid #ac4887;
  .box {
    text-align: center;
    cursor: pointer;
    overflow: contain;
    padding: 2rem;
    img {
      width: 20rem;
    }
  }
`;

export default Home;
