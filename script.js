// Base de conhecimento expandida sobre BPC/LOAS e Autismo
// Conteúdo validado com base em fontes jurídicas especializadas (2025/2026)

const knowledgeBase = [
    // --- O BÁSICO ---
    {
        keywords: ["o que é", "o que e", "definição", "significa", "bpc", "loas"],
        answer: "O BPC (Benefício de Prestação Continuada) é um benefício assistencial de 1 salário mínimo mensal. Ele é garantido a pessoas com deficiência (incluindo autismo) ou idosos (+65 anos) de baixa renda. <strong>Atenção:</strong> Não é aposentadoria e não paga 13º salário."
    },
    {
        keywords: ["quem tem direito", "requisitos", "posso receber", "critérios"],
        answer: "Para ter direito, é preciso cumprir 2 requisitos principais:<br>1. <strong>Deficiência:</strong> Comprovar via laudo que o autismo gera barreiras de longo prazo (mínimo 2 anos);<br>2. <strong>Renda:</strong> Ter renda familiar per capita (por pessoa) de até 1/4 do salário mínimo. (Gastos com saúde podem ser abatidos desse cálculo na justiça)."
    },

    // --- AUTISMO E GRAUS ---
    {
        keywords: ["autista leve", "nível 1", "grau 1", "suporte 1", "leve"],
        answer: "<strong>Sim!</strong> A lei não distingue graus de autismo. O INSS avalia as <strong>barreiras</strong> que a pessoa enfrenta, não apenas o diagnóstico. Se o autismo nível 1 atrapalha a participação plena na sociedade (escola, trabalho, vida social) e há baixa renda, o direito existe."
    },
    {
        keywords: ["tdah", "hiperatividade"],
        answer: "O TDAH sozinho não garante o BPC automaticamente, mas pode garantir se for grave e causar impedimentos de longo prazo, ou se estiver associado ao Autismo (comorbidade). É necessário laudo médico detalhando as limitações."
    },

    // --- RENDA E FINANCEIRO ---
    {
        keywords: ["renda", "salário", "dinheiro", "per capita", "calculo", "cálculo"],
        answer: "A regra básica é 1/4 do salário mínimo por pessoa da casa. <br><strong>Dica de Ouro:</strong> Se a família gasta muito com remédios, fraldas, terapias ou alimentação especial, esses valores podem ser descontados do cálculo da renda se você entrar na justiça. Guarde todas as notinhas!"
    },
    {
        keywords: ["trabalha", "carteira assinada", "emprego"],
        answer: "O BPC é para quem não consegue prover o próprio sustento. Se a pessoa com autismo começar a trabalhar, o benefício pode ser suspenso. Porém, existe o <strong>Auxílio-Inclusão</strong>: se o beneficiário começar a trabalhar, ele pode receber 50% do BPC + o salário."
    },
    {
        keywords: ["posso trabalhar", "trabalhar e bpc", "bpc e trabalhar", "posso ter bpc e trabalhar", "auxílio inclusão", "auxilio inclusão"],
        answer: "Você pode trabalhar, mas o BPC fica <strong>suspenso</strong> enquanto houver vínculo. Para não perder totalmente a renda, existe o <strong>Auxílio-Inclusão</strong>: quem recebia BPC e começa a trabalhar com <strong>vínculo formal</strong> pode receber <strong>50% do BPC</strong> junto com o salário. Requisitos: ter sido beneficiário do BPC, emprego formal e renda dentro do limite legal.<br><br><em>Exemplo:</em> João recebia BPC, foi contratado com carteira assinada e pediu o Auxílio-Inclusão; passou a receber <strong>metade do BPC</strong> + o salário."
    },

    // --- DOCUMENTAÇÃO E PERÍCIA ---
    {
        keywords: ["documentos", "papelada", "levar", "lista"],
        answer: "Leve tudo o que tiver!<br>1. Documentos pessoais (RG, CPF) de todos da casa;<br>2. CadÚnico atualizado;<br>3. <strong>Laudos Médicos:</strong> Devem ter o CID, descrição das limitações e assinatura do médico;<br>4. <strong>Relatórios Extras:</strong> Da escola, psicólogo, fonoaudiólogo (ajudam muito a provar as barreiras)."
    },
    {
        keywords: ["perícia", "pericia", "médico do inss", "avaliação"],
        answer: "Na perícia, o médico do INSS vai avaliar não só o autismo, mas como ele afeta a vida diária. <br><strong>Dica:</strong> Não tente 'suavizar' a situação. Conte todas as dificuldades reais: crises, necessidade de ajuda para comer/tomar banho, dificuldades na escola, etc."
    },
    
    // --- PROBLEMAS E NEGATIVAS ---
    {
        keywords: ["negado", "negou", "indeferido", "cortado", "recusado"],
        answer: "Não desista! O INSS nega muitos pedidos indevidamente. Se for negado, você tem 3 opções:<br>1. Recurso no próprio INSS (nem sempre funciona);<br>2. Procurar a Defensoria Pública;<br>3. Contratar um advogado especialista para entrar na Justiça (onde as chances costumam ser maiores)."
    },
    {
        keywords: ["advogado", "precisa de advogado", "defensoria"],
        answer: "Para pedir no INSS, não precisa de advogado. Mas se o INSS negar (o que é comum), é altamente recomendado procurar um advogado especialista ou a Defensoria Pública para garantir seu direito na justiça."
    },

    // --- COMO PEDIR / PRAZOS / CADÚNICO ---
    {
        keywords: ["como pedir", "solicitar", "meu inss", "agendar"],
        answer: "Você solicita pelo aplicativo ou site <strong>Meu INSS</strong>: Faça login, escolha 'Novo Requerimento' > 'Benefício Assistencial'. Mantenha o <strong>CadÚnico</strong> atualizado no CRAS antes de solicitar."
    },
    {
        keywords: ["prazo", "demora", "quanto tempo", "análise"],
        answer: "O prazo varia por cidade, geralmente entre <strong>30 e 90 dias</strong>. Pode demorar mais se faltar documento ou perícia. Acompanhe pelo Meu INSS e responda eventuais exigências."
    },
    {
        keywords: ["cadúnico", "cadunico", "cras", "atualizar"],
        answer: "É <strong>obrigatório</strong> ter CadÚnico ativo e atualizado. Atualize no CRAS sempre que houver mudança na renda, composição familiar ou a cada 2 anos."
    },

    // --- CÁLCULO DE RENDA / COMPOSIÇÃO FAMILIAR ---
    {
        keywords: ["quem entra", "composição familiar", "mora junto", "quem conta na renda"],
        answer: "Considera quem mora na mesma casa: pais, cônjuge/companheiro, irmãos e filhos menores. Visitantes não entram. Comprove com documentos (certidões, comprovante de residência)."
    },

    // --- ACÚMULO / PAGAMENTO / REPRESENTANTE ---
    {
        keywords: ["acumular", "acúmulo", "junto com", "aposentadoria", "pensão"],
        answer: "O BPC <strong>não acumula</strong> com aposentadorias ou pensões do INSS. A exceção é o <strong>Auxílio-Inclusão</strong> quando o beneficiário começa a trabalhar."
    },
    {
        keywords: ["auxílio inclusão", "auxilio inclusão", "inclusão"],
        answer: "Quem recebe BPC e começa a trabalhar pode pedir o <strong>Auxílio-Inclusão</strong> (50% do BPC). É necessário vínculo formal e renda dentro do limite legal."
    },
    {
        keywords: ["curatela", "representante legal", "receber", "pagamento"],
        answer: "Se a pessoa não puder movimentar conta, pode receber por <strong>representante legal</strong> (curador ou responsável). O banco é escolhido na solicitação."
    },

    // --- IDOSO ---
    {
        keywords: ["idoso", "65 anos", "bpc idoso"],
        answer: "O BPC ao idoso exige <strong>65 anos ou mais</strong> e baixa renda per capita. Não precisa comprovar deficiência, mas mantém a regra de renda e CadÚnico."
    },
    {
        keywords: ["documentos idoso", "idoso documentos", "idoso papelada"],
        answer: "Para o idoso: RG e CPF de todos da casa, comprovante de residência, CadÚnico atualizado e comprovação de renda da família. Não é necessário laudo de deficiência."
    },
    {
        keywords: ["idoso renda", "renda idoso", "cálculo idoso"],
        answer: "Vale a mesma regra: renda por pessoa da família até <strong>1/4 do salário mínimo</strong>. Despesas médicas podem ser consideradas judicialmente para flexibilizar o cálculo."
    },

    // --- PADRÃO ---
    {
        keywords: ["contato", "contato advogada", "contato advogado", "advogado", "ajuda", "humano", "advogada", "telefone", "instagram", "email", "e-mail", "whatsapp", "site", "website"],
        answer: "Sou um assistente virtual. Para casos complexos, você pode falar com a advogada: <br><strong>WhatsApp:</strong> <a href=\"https://wa.me/5534998952305\" target=\"_blank\" rel=\"noopener\">+55 34 99895-2305</a><br><strong>Instagram:</strong> <a href=\"https://www.instagram.com/adv.romenialuiza/\" target=\"_blank\" rel=\"noopener\">adv.romenialuiza</a><br><strong>E-mail:</strong> <a href=\"mailto:romenia.luiza@gmail.com\">romenia.luiza@gmail.com</a><br><strong>Site:</strong> <a href=\"https://rluzadvocacia.com/\" target=\"_blank\" rel=\"noopener\">rluzadvocacia.com</a>"
    }
];

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    div.innerHTML = text;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function findAnswer(text) {
    text = text.toLowerCase();
    const footer = "<br><br>Para mais duvidas entrar em contato com a Advogada";
    function menu() {
        return "Pergunte algo como:<br><ul><li>Como pedir no Meu INSS?</li><li>Quais documentos levar na perícia?</li><li>Autista nível 1 tem direito?</li><li>Quem entra no cálculo da renda?</li><li>Precisa CadÚnico atualizado?</li><li>Quanto tempo demora a análise?</li><li>Se for negado, o que faço?</li><li>Posso trabalhar e manter o BPC?</li><li>Idoso 65+ tem direito a aposentadoria?</li><li>Posso ter BPC e trabalhar?</li><li>Contato da advogada</li><li>Quais documentos para idoso?</li></ul>";
    }
    if (
        text.includes("continuar tirando duvidas com o assistente bpc") ||
        text === "continuar" ||
        text.includes("menu") ||
        text.includes("opções") ||
        text.includes("opcoes") ||
        text.includes("voltar") ||
        text.includes("início") ||
        text.includes("inicio")
    ) {
        return menu() + footer;
    }
    for (let item of knowledgeBase) {
        const match = item.keywords.some(keyword => text.includes(keyword));
        if (match) {
            return item.answer + footer;
        }
    }
    return "Desculpe, não entendi bem. Tente perguntar sobre 'documentos', 'renda', 'perícia' ou 'se for negado'." + footer;
}

function handleSend() {
    const text = userInput.value.trim();
    if (text === "") return;

    addMessage(text, 'user');
    userInput.value = "";

    // Simula tempo de resposta "digitando..."
    setTimeout(() => {
        const answer = findAnswer(text);
        addMessage(answer, 'bot');
    }, 600);
}

sendBtn.addEventListener('click', handleSend);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});
