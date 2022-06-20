import { useRouter } from 'next/router';

const categoriesPT = {
  History: 'História',
  Architecture: 'Arquitetura',
  Literature: 'Literatura',
  Urbanism: 'Urbanismo',
  Archaelogy: 'Arqueologia',
  Environment: 'Meio Ambiente',
};

const translations = {
  en: {
    gallery: 'Narratives Gallery',
    signUp: 'Sign Up',
    manage: 'Manage My Narratives',
    login: 'Login',
    filterCategory: 'Filter by category',
    categories: en => en,
    myNarratives: 'My Narratives',
    addNarrative: 'Add Narrative',
    modified: 'Modified',
    created: 'Created',
    preview: 'Preview',
    editor: 'Editor',
    published: 'Published',
    download: 'Download my data',
    editNarrative: 'Edit Narrative',
    submit: 'Submit for publication approval',
    title: 'Title',
    description: 'Description',
    image: 'Image',
    chooseFile: 'Choose File',
    tags: 'Tags',
    category: 'Category',
    cancel: 'Cancel',
    save: 'Save',
    deleteProject: 'Delete Project',
    deleteQuestion: 'Delete this narrative?',
    deleteConfirm:
      'Are you sure you want to delete this narrative? This action is permanent and cannot be undone.',
    categorySelect: 'Select a category',
    tagSelect: 'Select tags',
    launchPreview: 'Launch Preview',
    newText: 'New',
    copy: 'Copy',
    deleteText: 'Delete',
    cardTitle: 'Card Title',
    cardDescription: 'Card Description',
    size: 'Size',
    fullscreen: 'Fullscreen',
    medium: 'Medium',
    small: 'Small',
    externalMedia: 'External Media',
    features: 'Annotations',
    newAnnotation: 'New Annotation',
    year: 'Year',
    layers: 'Layers',
    visuals: 'Maps / Plans / Aerials',
    noBasemaps: 'No basemaps available for the selected year',
    selectBasemap: 'Select a basemap',
    opacity: 'Overlay Opacity',
    searchName: 'Search by name',
    currentlySelected: 'Currently selected feautre',
    welcome: 'Welcome to imagineRio Narratives',
    loginFull: 'Log in to your account',
    email: 'Email',
    password: 'Password',
    loginError: 'You could not be logged in. Please check your username and password.',
    verifyError:
      'Your account has not been verified. Please check your email for a verification link.',
    forgot: 'Forgot your password?',
    createAccount: 'Create your account for imagineRio Narratives',
    enterDetails: 'Enter your details below:',
    name: 'Full Name',
    institution: 'Institution',
    confirm: 'Confirm Password',
    createButton: 'Create Account',
    createSuccess:
      'User created successfully. Please check your email to confirm your account and login.',
    createError: 'Could not create your account. Please try again.',
    fieldError: 'Please fill out all required fields',
    untitledProject: 'Untitled project',
    language: 'Language',
    reset: 'Reset your imagineRio Narratives Password',
    resetInstructions: 'Enter your email below and we will send you a link to reset your password:',
    resetPassword: 'Reset Password',
    resetSuccess:
      'We have received your request. Please check your email for instructions on how to reset your password.',
    author: 'Author',
    pages: 'Pages',
    properties: 'Properties',
    iconography: 'Iconography',
    viewNarrative: 'View the narrative',
    backNarratives: 'Back to narratives',
    loadingText: 'Loading',
    noResults: 'No results found',
  },
  pt: {
    gallery: 'Galeria de Narrativas',
    signUp: 'Criar Conta',
    manage: 'Gerenciar Minhas Narrativas',
    login: 'Entrar',
    filterCategory: 'Filtrar por categoria',
    categories: en => categoriesPT[en],
    myNarratives: 'Minhas Narrativas',
    addNarrative: 'Nova Narrativa',
    modified: 'Modificado',
    created: 'Criado',
    preview: 'Pré-visualização',
    editor: 'Editor',
    published: 'Publicado',
    download: 'Baixar meus dados',
    editNarrative: 'Editar narrativa',
    submit: 'Enviar publicação para aprovação',
    title: 'Título',
    description: 'Descrição',
    image: 'Imagem',
    chooseFile: 'Escolher arquivo',
    tags: 'Tags',
    category: 'Categoria',
    cancel: 'Cancelar',
    save: 'Salvar',
    deleteProject: 'Excluir narrativa',
    deleteQuestion: 'Excluir esta narrativa?',
    deleteConfirm:
      'Tem certeza de que deseja excluir esta narrativa? Esta ação é permanente e não pode ser revertida.',
    categorySelect: 'Selecione uma categoria',
    tagSelect: 'Selecione tags',
    launchPreview: 'Pré-visualizar',
    newText: 'Novo',
    copy: 'Copiar',
    deleteText: 'Excluir',
    cardTitle: 'Título do cartão',
    cardDescription: 'Descrição do cartão',
    size: 'Tamanho',
    fullscreen: 'Tela cheia',
    medium: 'Médio',
    small: 'Pequeno',
    externalMedia: 'Mídia externa',
    features: 'Anotações',
    newAnnotation: 'Nova anotação',
    year: 'Ano',
    layers: 'Camadas',
    visuals: 'Mapas Georreferenciados',
    noBasemaps: 'Nenhum mapa disponível para o ano selecionado',
    selectBasemap: 'Selecione um mapa',
    opacity: 'Transparência',
    searchName: 'Pesquisar por nome',
    currentlySelected: 'Recurso selecionado atualmente',
    welcome: 'Bemvindo ao imagineRio Narratives',
    loginFull: 'Entrar com sua conta',
    email: 'Email',
    password: 'Senha',
    loginError: 'Você não pode ser logado. Verifique seu nome de usuário e senha.',
    verifyError: 'Sua conta não foi verificada. Verifique seu email para um link de verificação.',
    forgot: 'Esqueceu sua senha?',
    createAccount: 'Criar sua conta para imagineRio Narratives',
    enterDetails: 'Insira seus detalhes abaixo:',
    name: 'Nome completo',
    institution: 'Instituição',
    confirm: 'Confirmar senha',
    createButton: 'Criar conta',
    createSuccess:
      'Conta criada com sucesso. Verifique seu email para confirmar sua conta e entrar.',
    createError: 'Não foi possível criar sua conta. Tente novamente.',
    fieldError: 'Por favor, preencha todos os campos obrigatórios',
    untitledProject: 'Projeto sem título',
    language: 'Idioma',
    reset: 'Redefinir sua senha do imagineRio Narratives',
    resetInstructions: 'Insira seu email abaixo e enviaremos um link para redefinir sua senha:',
    resetPassword: 'Redefinir senha',
    resetSuccess:
      'Nós recebemos o seu pedido. Por favor, verifique seu e-mail para obter instruções sobre como redefinir sua senha.',
    author: 'Autor',
    pages: 'Páginas',
    properties: 'Propriedades',
    iconography: 'Íconografia',
    viewNarrative: 'Ver a narrativa',
    backNarratives: 'Voltar para narrativas',
    loadingText: 'Carregando',
    noResults: 'Nenhum resultado encontrado',
  },
};

const useLocale = () => {
  const { locale } = useRouter();
  return translations[locale];
};

export default useLocale;
