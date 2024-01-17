import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";

export default function Form() {
  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");
  const [IMC, setIMC] = useState("");
  const [Erro, setErro] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Altura: ${Altura}, Peso: ${Peso}`);
  };

  const CalcularIMC = () => {
    if (Altura && Peso) {
      let alturaMetros = Altura / 100;
      let imc = Peso / Math.pow(alturaMetros, 2);
      setIMC(`IMC: ${imc.toFixed(2)}, ${analizarIMC(imc)}`);
      setErro("");
    } else {
      setErro("Por favor, insira valores para Altura e Peso.");
    }
  };

  const analizarIMC = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  };

  return (
    <Center h="100vh">
      <Box
        as="form"
        onSubmit={handleSubmit}
        p={5}
        borderWidth={2}
        borderRadius="md"
        boxShadow="lg"
      >
        <FormControl id="Altura">
          <Input
            placeholder="Altura em cm"
            size="md"
            type="number"
            width="60%"
            value={Altura}
            onChange={(e) => setAltura(e.target.value)}
            bg="white"
            border="2px"
            borderColor="teal.500"
            borderRadius="md"
          />
        </FormControl>
        <FormControl id="Peso" mt={2}>
          <Input
            placeholder="Peso"
            size="md"
            width="60%"
            type="number"
            value={Peso}
            onChange={(e) => setPeso(e.target.value)}
            bg="white"
            border="2px"
            borderColor="teal.500"
            borderRadius="md"
          />
        </FormControl>
        <Button
          mt={2}
          colorScheme="teal"
          type="submit"
          onClick={CalcularIMC}
          size="md"
          borderRadius="md"
        >
          Calcular
        </Button>
        {IMC && <Text mt={2}>{IMC}</Text>}
        {Erro && (
          <Text mt={2} color="red">
            {Erro}
          </Text>
        )}
      </Box>
    </Center>
  );
}
