import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { createBox } from "@shopify/restyle";

import { SafeAreaView } from 'react-native-safe-area-context';
import { TextArea } from '../components/TextArea';
import { Input } from "../components/Input/Input";
import { Button } from '../components/Button';
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { Toast } from "../components/Toast";
import { ThemeProps } from "../assets/theme";
import { Content } from "../components/Content/Content";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const Box = createBox<ThemeProps>()

export default function Menu() {
  const [description, setDescription] = useState("");
  const [content, setContent] = useState<string>("Seu Cardápio");
  const [isLoading, setIsLoading] = useState(false);
  const [collectionName, setCollectionName] = useState('Tags');
  const [isModalFormVisible, setIsModalFormVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  async function handleFetchMenu() {
    setIsLoading(true);
    const prompt = `
      Generate a receipt in Portuguese based on the following ingredients ${description.trim()}.
      Show the name of the plate, the receipt need show step by step of how to preparate a plate.
      In a separate paragraphi to write nutritional values based in the ingredients.
    `;

    try {
      const response = await fetch("https://api.openai.com/v1/engines/text-davinci-003-playground/completions", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          prompt,
          temperature: 0.6,
          max_tokens: 500,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      });
      const data = await response.json();
      saveContent(data.choices[0].text);
    } catch(error) {
      Alert.alert(`Não foi possível buscar uma receita: ${error}.`);
    } finally {
      setIsLoading(false);
    }
  }

  function saveContent(data: string) {
    const contentFormated = data.trim();
    setContent(contentFormated);
  }

  function handleNameCollectionEdit() {
    setIsModalFormVisible(false);
  }

  return (
    <SafeAreaView>
      {toastMessage && <Toast message={toastMessage} />}

      <Header title="Receita" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Box m="m">
          <TextArea
            placeholder="Digite o seus igradientes, exemplo: Alho, macarrão, tomate..."
            onChangeText={setDescription}
            value={description}
            onClear={() => setDescription("")}
            editable={!isLoading}
          />

          <Box my="m">
            <Button
              title="Gerar Receita"
              onPress={handleFetchMenu}
              isLoading={isLoading}
            />
          </Box>
        </Box>

        <Content
          content={content}
          setContent={setContent}
        />
      </ScrollView>

      <Modal
        visible={isModalFormVisible}
        onClose={() => setIsModalFormVisible(false)}
        title="Editar nome"
      >
        <>
          <Input
            placeholder="Nome da coleção"
            onChangeText={setCollectionName}
            value={collectionName}
          />

          <Button
            title="Salvar"
            onPress={handleNameCollectionEdit}
          />
        </>
      </Modal>
    </SafeAreaView>
  )
}