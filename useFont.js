import * as Font from 'expo-font';
const useFonts = async () =>
    await Font.loadAsync({
        Amatic: require('./assets/font/AmaticSC-Regular.ttf'),
        Amaticbold: require('./assets/font/Amatic-Bold.ttf'),
        Cascadia : require('./assets/font/Cascadia.ttf'),
      
    });

export default useFonts