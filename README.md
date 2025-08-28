# 📋 MeuAppStorage - Lista de Tarefas

Bem-vindo ao **MeuAppStorage**!  
Aqui você nunca mais vai esquecer de comprar pão, estudar para a prova ou alimentar o seu Totoro.  
Este é um app simples de Lista de Tarefas feito em **React Native** com persistência usando o AsyncStorage.  
Salve, visualize e limpe suas tarefas de forma fácil e divertida! 😄

---

## 🚀 Funcionalidades

- ✅ Adicione quantas tarefas quiser (sem sobrescrever as antigas!)
- 💾 Suas tarefas ficam salvas mesmo fechando o app (persistência com AsyncStorage)
- 🗑️ Limpe todas as tarefas com um clique
- 📱 Interface simples e intuitiva

---

## 🛠️ Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/MeuAppStorage.git
   cd MeuAppStorage/ListaDeTarefas
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Instale o AsyncStorage:**
   ```sh
   npm install @react-native-async-storage/async-storage
   ```

4. **Rode o app:**
   - Com Expo:
     ```sh
     npx expo start
     ```
   - Com React Native CLI:
     ```sh
     npx react-native run-android
     # ou
     npx react-native run-ios
     ```

---

## 🧑‍💻 Estrutura do Projeto

```
ListaDeTarefas/
├── App.js
├── components/
│   └── Botao.js
├── package.json
└── ...
```

- **App.js**: Onde toda a mágica acontece!
- **components/Botao.js**: Seu botão customizado para adicionar e limpar tarefas.

---

## ✨ Como usar

1. **Digite sua tarefa** no campo de texto.
2. Clique em **Adicionar Tarefa**.
3. Veja sua lista crescer! Cada tarefa aparece logo abaixo.
4. Para limpar tudo, clique em **Limpar Tarefas**.
5. Feche e abra o app: suas tarefas continuam lá (a não ser que você limpe tudo, claro!).

---

## 🤔 Dúvidas Frequentes

**1. Minhas tarefas sumiram!**
- Você clicou em "Limpar Tarefas"? Se sim, elas foram removidas de propósito! Se não, verifique se o AsyncStorage está funcionando corretamente.

**2. Posso adicionar tarefas iguais?**
- Pode sim! O app não faz validação de duplicidade.

**3. O app funciona offline?**
- Sim! Tudo é salvo localmente no seu dispositivo.

---


## 🦸‍♀️ Créditos

Feito com 💙 por Ana Souza (https://github.com/souzabweatriz)

---

## 📃 Licença

Este projeto é livre! Use, modifique e compartilhe como quiser.

---

**Divirta-se organizando sua vida! 🚀**
