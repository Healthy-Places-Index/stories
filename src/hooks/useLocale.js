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
    features: 'Features',
    newAnnotation: 'New Annotation',
    year: 'Year',
    layers: 'Layers',
    visuals: 'Maps / Plans / Aerials',
    noBasemaps: 'No basemaps available for the selected year',
    selectBasemap: 'Select a basemap',
    opacity: 'Overlay Opacity',
    searchName: 'Search by name',
    currentlySelected: 'Currently selected feautre',
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
    deleteConfirm: 'Tem certeza de que deseja excluir esta narrativa? Esta ação é permanente e não pode ser revertida.',
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
    features: 'Recursos',
    newAnnotation: 'Nova anotação',
    year: 'Ano',
    layers: 'Camadas',
    visuals: 'Mapas / Projetos / Imagens Aéreas',
    noBasemaps: 'Nenhum mapa disponível para o ano selecionado',
    selectBasemap: 'Selecione um mapa',
    opacity: 'Opacidade da camada',
    searchName: 'Pesquisar por nome',
    currentlySelected: 'Recurso selecionado atualmente',
  },
};

const useLocale = () => {
  const { locale } = useRouter();
  return translations[locale];
};

export default useLocale;
