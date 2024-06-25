import axios from 'axios';

const translate = async (text, targetLang) => {
  const apiKey = 'AIzaSyD1ePvCPiAcgcJjqarksVLGyP6cWt28CnI';
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang,
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text;
  }
};

export default translate;
