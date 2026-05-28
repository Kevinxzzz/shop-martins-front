import { Enterprise, User, Category, Product, Media, Token } from "@/types";
import { UserRole } from "@/shared/constants/userRoles";

// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Mock Data
// ═══════════════════════════════════════════════════════════════

export const empresa: Enterprise = {
  id: "emp-001",
  name: "Shop Martins",
  number: "5511999999999",
  cpfCnpj: "12.345.678/0001-90",
  salesGroupLink: "https://chat.whatsapp.com/abc123grupo",
};

const vendedorNomes = [
  { nome: "Rafael Oliveira", email: "rafael@shopmartins.com" },
  { nome: "Lucas Santos", email: "lucas@shopmartins.com" },
  { nome: "Gabriel Costa", email: "gabriel@shopmartins.com" },
  { nome: "Matheus Ferreira", email: "matheus@shopmartins.com" },
  { nome: "Pedro Almeida", email: "pedro@shopmartins.com" },
  { nome: "Thiago Barbosa", email: "thiago@shopmartins.com" },
  { nome: "Bruno Nascimento", email: "bruno@shopmartins.com" },
  { nome: "Felipe Rodrigues", email: "felipe@shopmartins.com" },
  { nome: "André Gomes", email: "andre@shopmartins.com" },
  { nome: "Diego Martins", email: "diego@shopmartins.com" },
];

export const categorias: Category[] = [
  {
    id: "cat-001",
    name: "Neymar",
    slug: "neymar",
    status: "ACTIVE",
    deletedAt: null,
    productsCount: 10,
  },
  {
    id: "cat-002",
    name: "over 3200",
    slug: "over-3200",
    status: "ACTIVE",
    deletedAt: null,
    productsCount: 5,
  },
  {
    id: "cat-003",
    name: "messi blitz",
    slug: "messi-blitz",
    status: "ACTIVE",
    deletedAt: null,
    productsCount: 8,
  },
  {
    id: "cat-004",
    name: "Gullit",
    slug: "gullit",
    status: "ACTIVE",
    deletedAt: null,
    productsCount: 2,
  },
  {
    id: "cat-005",
    name: "Hazzard",
    slug: "hazzard",
    status: "ACTIVE",
    deletedAt: null,
    productsCount: 1,
  },
  {
    id: "cat-006",
    name: "Cruyff",
    slug: "cruyff",
    status: "ACTIVE",
    deletedAt: null,
    productsCount: 15,
  },
];

const avatarSeeds = [
  "Felix",
  "Aneka",
  "Jude",
  "Sasha",
  "Leo",
  "Milo",
  "Luna",
  "Zoe",
  "Max",
  "Aria",
];

export const vendedores: User[] = vendedorNomes.map((v, i) => ({
  id: `ven-${String(i + 1).padStart(3, "0")}`,
  enterpriseId: empresa.id,
  name: v.nome,
  email: v.email,
  whatsappPhone: `5511${String(900000000 + i * 11111111)}`,
  profilePicture: `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${avatarSeeds[i]}`,
  role: i === 0 ? UserRole.ADMIN : UserRole.SELLER,
  isActive: true,
  isFounder: i === 0,
}));

const produtoTitulos: Record<string, string[]> = {
  "cat-001": [
    "Neymar Jr. Al-Hilal Home 2024",
    "Chuteira Puma Future Neymar",
    "Boneco Neymar Jr Articulado",
    "Camisa Seleção Brasil Neymar 10",
    "Neymar Golden Edition Card",
    "Livro Neymar: O Caos Perfeito",
    "Camisa PSG Neymar Classic",
    "Neymar Santos FC 2011 Retro",
    "Meião Neymar Skills",
    "Bola de Futebol Neymar Grafite",
    "Jaqueta Corta-Vento Neymar",
    "Mochila Neymar JR",
    "Chuteira Futsal Neymar Future",
    "Boné NJR Black Edition",
    "Neymar World Cup 2022 Match Worn",
    "Poster Neymar Jr XL",
    "Caneca Neymar Brasil",
    "Pulseira Neymar Force",
    "Agasalho Neymar Puma",
    "Chuteira Campo Neymar Jr",
  ],
  "cat-002": [
    "Conta eFootball Over 3200 Força",
    "Pack Jogadores eFootball Premium",
    "Conta Full Epic over 3200",
    "Top Global eFootball Account",
    "Conta eFootball 2024 End Game",
    "Account eFootball Max Power 3200",
    "Time eFootball 3200+ Força",
    "Conta eFootball Legends Only",
    "eFootball Account 3200+ Strength",
    "Conta eFootball 2024 Full Legends",
    "Pack eFootball coins 3200",
    "Conta eFootball Meta Teams",
    "Account eFootball 3200 Squad",
    "Conta eFootball Full Epic/BT",
    "Time eFootball 3200+ Power",
    "Conta eFootball 2024 Pro",
    "eFootball Account 3200 Skill",
    "Conta eFootball End Game 2024",
    "Time eFootball 3200 Force",
    "Account eFootball 3200+",
  ],
  "cat-003": [
    "Lionel Messi Blitz Curler eFootball",
    "Messi 2022 Argentina Edition",
    "Chuteira Adidas Messi Inter Miami",
    "Camisa Messi Argentina 2024",
    "Messi Blitz Curler Max Level",
    "Boneco Messi Inter Miami",
    "Camisa Barcelona Messi 10 Retro",
    "Messi Golden Ball Edition",
    "Bola Messi L10 Premium",
    "Jaqueta Messi Adidas",
    "Mochila Messi Logo",
    "Boné Messi Inter Miami",
    "Messi Argentina World Cup 10",
    "Livro Messi: O Rei",
    "Lionel Messi eFootball Pack",
    "Poster Messi GOAT XL",
    "Caneca Messi Argentina",
    "Pulseira Messi Force",
    "Agasalho Messi Adidas",
    "Messi Skills Ball",
  ],
  "cat-004": [
    "Ruud Gullit eFootball Epic Card",
    "Camisa Milan Gullit Retro",
    "Gullit Holland 1988 Jersey",
    "Gullit AC Milan 1990 Kit",
    "Ruud Gullit Max Level eFootball",
    "Gullit Legend Card eFootball",
    "Action Figure Gullit Milan",
    "Poster Gullit Legend",
    "Camisa Holanda Gullit 10",
    "Livro Ruud Gullit: My Life",
    "Gullit eFootball Epic/Big Time",
    "Gullit Milan Legend Edition",
    "Gullit Holland Classic Kit",
    "Gullit AC Milan Home 89",
    "Ruud Gullit eFootball Pro",
    "Action Figure Gullit Holland",
    "Caneca Gullit Milan",
    "Pulseira Gullit Legend",
    "Agasalho Gullit Retro",
    "Gullit Skills Pack",
  ],
  "cat-005": [
    "Eden Hazard Real Madrid Home",
    "Camisa Chelsea Hazard 10 Retro",
    "Hazard Seleção Bélgica 2022",
    "Chuteira Nike Hazard Edition",
    "Eden Hazard Chelsea 2012 Kit",
    "Hazard Real Madrid Away 20/21",
    "Action Figure Hazard Chelsea",
    "Poster Hazard Legend",
    "Camisa Bélgica Hazard 10",
    "Livro Eden Hazard: The Star",
    "Hazard Chelsea Champions League",
    "Hazard Real Madrid Pro",
    "Hazard Belgium Classic Kit",
    "Hazard Chelsea Home 15",
    "Eden Hazard eFootball Card",
    "Action Figure Hazard Belgium",
    "Caneca Hazard Chelsea",
    "Pulseira Hazard Star",
    "Agasalho Hazard Real Madrid",
    "Hazard Skills Pack",
  ],
  "cat-006": [
    "Johan Cruyff Barcelona Retro 14",
    "Cruyff Ajax 1971 Jersey",
    "Cruyff Holland 1974 World Cup",
    "Cruyff eFootball Epic Card",
    "Johan Cruyff Max Level eFootball",
    "Cruyff Legend Edition Card",
    "Action Figure Cruyff Barca",
    "Poster Cruyff Legend",
    "Camisa Holanda Cruyff 14",
    "Livro Cruyff: My Turn",
    "Cruyff eFootball Epic/Big Time",
    "Cruyff Ajax Legend Edition",
    "Cruyff Holland Classic Kit",
    "Cruyff Barcelona Home 74",
    "Johan Cruyff eFootball Pro",
    "Action Figure Cruyff Holland",
    "Caneca Cruyff Ajax",
    "Pulseira Cruyff Legend",
    "Agasalho Cruyff Retro",
    "Cruyff Skills Pack",
  ],
};

const descricoes = [
  "Produto premium com tecnologia de ponta para máxima performance em campo. Material de alta durabilidade com design moderno e inovador. Ideal para atletas que buscam o melhor desempenho.",
  "Desenvolvido com materiais sustentáveis de alta qualidade. Conforto excepcional com ajuste anatômico perfeito. Tecnologia exclusiva para melhor desempenho esportivo.",
  "Edição especial com design exclusivo e acabamento premium. Tecido respirável com tecnologia de secagem rápida. Excelente relação custo-benefício para atletas exigentes.",
  "Performance profissional com conforto casual. Tecnologia de absorção de impacto e estabilidade aprimorada. Perfeito para treinos intensos e jogos competitivos.",
  "Produto licenciado oficial com todas as especificações técnicas. Fabricado com os mais altos padrões de qualidade. Garante conforto, estilo e funcionalidade.",
];

function generateMedia(productId: string): Media[] {
  const baseUrl = "https://picsum.photos/seed";
  const media: Media[] = [];

  for (let i = 1; i <= 3; i++) {
    media.push({
      id: `mid-${productId}-${i}`,
      fileUrl: `${baseUrl}/${productId}-${i}/600/600`,
      type: "image",
      order: i,
      productId: productId,
    });
  }

  media.push({
    id: `mid-${productId}-vid`,
    fileUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    type: "video",
    order: 4,
    productId: productId,
  });

  return media;
}

function gerarPreco(): number {
  const precos = [
    59.9, 79.9, 99.9, 129.9, 149.9, 179.9, 199.9, 249.9, 299.9, 349.9, 399.9,
    449.9, 499.9, 599.9, 799.9, 999.9, 1299.9,
  ];
  return precos[Math.floor(Math.random() * precos.length)];
}

export const produtos: Product[] = [];

vendedores.forEach((vendedor, vIdx) => {
  const catKeys = Object.keys(produtoTitulos);

  for (let p = 0; p < 20; p++) {
    const catId = catKeys[(vIdx + p) % catKeys.length];
    const titulos = produtoTitulos[catId];
    const titulo = titulos[p % titulos.length];
    const prodId = `prod-${String(vIdx + 1).padStart(2, "0")}-${String(p + 1).padStart(2, "0")}`;
    const category = categorias.find((c) => c.id === catId)!;

    produtos.push({
      id: prodId,
      title: titulo,
      description: descricoes[p % descricoes.length],
      price: gerarPreco(),
      categoryId: catId,
      sellerId: vendedor.id,
      enterpriseId: empresa.id,
      countViews: Math.floor(Math.random() * 5000) + 100,
      media: generateMedia(prodId),
      category,
      seller: vendedor,
      createdAt: new Date(
        2024,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1,
      ).toISOString(),
    });
  }
});
