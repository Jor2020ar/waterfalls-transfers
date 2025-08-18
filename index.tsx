// --- TYPE DEFINITIONS ---
type FormField = {
    id: string;
    name: string;
    type: 'text' | 'date' | 'time' | 'number' | 'textarea' | 'select' | 'heading';
    labelKey: string;
    required: boolean;
    options?: { value: string; key: string }[];
};

type ExcursionField = {
    id: string;
    key: string;
};

type FormConfig = {
    titleKey: string;
    color: string;
    colorDark: string;
    colorRgb: string;
    fields: FormField[];
    excursions?: ExcursionField[];
    hasCustomExcursion?: boolean;
};

type Translations = {
    [lang: string]: {
        [key: string]: string | { [key:string]: string };
    };
};

type ReservationDetail = {
    id: string;
    label: string;
    value: string;
};

type ParsedExcursion = {
    id: string;
    date: string;
    time: string;
    name: string;
};

type ReservationData = {
    details: ReservationDetail[];
    excursions: ParsedExcursion[];
};

type CalendarEvent = {
    title: string;
    date: string;
    time: string;
    location?: string;
    description?: string;
};


// --- TRANSLATIONS ---
const translations: Translations = {
    es: {
        mainTitle: "Waterfalls Airport Transfers",
        subtitle: "Selecciona tu servicio",
        transferInTitle: "Transfer IN",
        transferInDesc: "Servicio de traslado desde el aeropuerto a tu destino en Puerto Iguazú.",
        transferOutTitle: "Transfer OUT",
        transferOutDesc: "Traslado desde tu ubicación hasta el aeropuerto para tu vuelo.",
        transferInOutTitle: "Transfer IN + OUT",
        transferInOutDesc: "Servicio completo de ida y vuelta al aeropuerto.",
        excursionsTitle: "Excursiones",
        excursionsDesc: "Tours y actividades en la región de la Triple Frontera.",
        transferDifferentTitle: "Transfer IN + OUT Dif.",
        transferDifferentDesc: "Servicio con diferentes destinos de llegada y salida.",
        transferNormalTitle: "Transfer normal",
        transferNormalDesc: "Traslados locales dentro de Puerto Iguazú y alrededores.",
        transferAllTitle: "Transfer IN/OUT + Excursiones",
        transferAllDesc: "Combina tu servicio de traslado IN/OUT con nuestras excursiones.",
        footerText: "Traslados Nacionales & Internacionales - Puerto Iguazú, Misiones, Argentina",
        fullNameLabel: "Nombre completo",
        whatsappLabel: "Contacto de WhatsApp",
        originLabel: "Procedencia",
        passengersLabel: "Cantidad de pasajeros",
        luggageLabel: "Cantidad de equipaje",
        priceLabel: "Precio total",
        depositLabel: "Monto de la seña",
        paymentMethodLabel: "Método de pago",
        selectMethodOption: "Seleccionar método",
        cashOption: "Efectivo",
        transferOption: "Transferencia",
        creditCardOption: "Tarjeta de Crédito",
        debitCardOption: "Tarjeta de Débito",
        currencyLabel: "Moneda",
        arsOption: "Pesos argentinos",
        usdOption: "Dólares estadounidenses",
        eurOption: "Euros",
        brlOption: "Reales",
        receiptLabel: "Comprobante de pago",
        notesLabel: "Notas adicionales",
        submitButton: "Enviar Reserva por WhatsApp",
        sendingButton: "Enviando...",
        fieldRequiredError: "Este campo es obligatorio.",
        atLeastOneExcursionError: "Por favor, selecciona al menos una excursión o detalla una personalizada.",
        notificationSent: "¡Reserva enviada!",
        modalTitles: {
            'transfer-in': "Reserva de Transfer IN",
            'transfer-out': "Reserva de Transfer OUT",
            'transfer-in-out': "Reserva de Transfer IN + OUT",
            'excursions': "Reserva de Excursión",
            'transfer-different': "Reserva de Transfer con Destinos Diferentes",
            'transfer-normal': "Reserva de Transfer Normal",
            'transfer-all': "Reserva de Transfer IN/OUT + Excursiones"
        },
        formFieldLabels: {
            airportOrigin: "Origen (aeropuerto)",
            destination: "Destino (hotel/dirección)",
            arrivalDate: "Fecha de llegada",
            flightTime: "Horario del vuelo de llegada",
            flightNumber: "Número de vuelo de llegada",
            hotelOrigin: "Origen (hotel/dirección)",
            airportDestination: "Destino (aeropuerto)",
            transferDate: "Fecha de traslado",
            departureTime: "Horario de recogida",
            flightTimeOut: "Horario del vuelo de salida",
            flightNumberOut: "Número de vuelo de salida",
            excursionDetails: "Detalles de la excursión (nombre, fecha, etc.)",
            departureDate: "Fecha de salida",
            selectExcursions: "Selección de excursiones (*)",
            customExcursionDetails: "Excursión personalizada",
            transferInHeading: "Datos del Transfer IN",
            transferOutHeading: "Datos del Transfer OUT",
            excursionDate: "Fecha",
            excursionTime: "Hora"
        },
        excursionOptions: {
            cataratasArgentinas: "Cataratas Argentinas",
            cataratasBrasilenas: "Cataratas Brasileñas",
            parqueDeLasAves: "Parque de las Aves",
            minasDeWanda: "Minas de Wanda",
            ruinasDeSanIgnacio: "Ruinas de San Ignacio",
            museoDeCera: "Museo de Cera",
            rafainCenaShow: "Rafain Cena Show",
            tourDeComprasParaguay: "Tour de Compras Paraguay",
            cooperativaYerbatera: "Cooperativa Yerbatera Andresito",
            paseoLunaLlena: "Paseo Luna Llena",
            saltoDelMocona: "Salto del Moconá",
            parqueDeLaCruz: "Parque de la Cruz",
            dutyFreeShop: "Duty Free Shop",
            cataratasBrAvesDuty: "Cataratas BR + Parque de las Aves + Duty Free",
            flyFoz: "FlyFoz Paracaidismo",
            parqueAventuraMonday: "Parque Aventura Monday",
            represaItaipu: "Represa Itaipu",
            shoppingCatuaí: "Shopping Catuaí Palladium",
            cataratasArgDuty: "Cataratas Argentinas + Duty Free Shop"
        },
        confirmationTitle: "¡Reserva Enviada!",
        confirmationMessageDefault: "Tu solicitud de reserva ha sido enviada por WhatsApp. Nos pondremos en contacto contigo a la brevedad para confirmar todos los detalles.",
        confirmationTipsDefaultTitle: "Consejos para tu viaje:",
        confirmationTipsDefault: "Asegúrate de tener a mano los detalles de tu vuelo.|Si hay cambios en tu itinerario, avísanos con anticipación.|¡Prepara tu cámara para no perderte nada de Iguazú!",
        confirmationMessageExcursions: "Tu solicitud ha sido enviada. Incluimos enlaces para que agregues los eventos a tu calendario. Nos pondremos en contacto para confirmar.",
        confirmationTipsExcursionsTitle: "Consejos para tus excursiones:",
        confirmationTipsExcursions: "Lleva ropa cómoda, protector solar y repelente de insectos.|No olvides tu documento de identidad o pasaporte.|¡Disfruta de la aventura y la majestuosidad de la naturaleza!",
        closeButton: "Cerrar",
        addToCalendarLabel: "Agregar eventos al calendario",
        linkCopiedNotification: "¡Enlace copiado al portapapeles!",
        shareLinkButton: "Compartir Enlace",
        shareLinkTitle: "Compartir enlace de la página",
        shareMessage: "Comparte este servicio con otros:",
        copyLinkTitle: "Copiar enlace",
        nativeShareButton: "Compartir vía...",
    },
    en: {
        mainTitle: "Waterfalls Airport Transfers",
        subtitle: "Select your service",
        transferInTitle: "Transfer IN",
        transferInDesc: "Transfer service from the airport to your destination in Puerto Iguazú.",
        transferOutTitle: "Transfer OUT",
        transferOutDesc: "Transfer from your location to the airport for your flight.",
        transferInOutTitle: "Transfer IN + OUT",
        transferInOutDesc: "Complete round-trip airport transfer service.",
        excursionsTitle: "Excursions",
        excursionsDesc: "Tours and activities in the Triple Frontier region.",
        transferDifferentTitle: "Diff. Transfer IN + OUT",
        transferDifferentDesc: "Service with different arrival and departure destinations.",
        transferNormalTitle: "Standard Transfer",
        transferNormalDesc: "Local transfers within Puerto Iguazú and surroundings.",
        transferAllTitle: "Transfer IN/OUT + Excursions",
        transferAllDesc: "Combine your IN/OUT transfer service with our excursions.",
        footerText: "National & International Transfers - Puerto Iguazú, Misiones, Argentina",
        fullNameLabel: "Full Name",
        whatsappLabel: "WhatsApp Contact",
        originLabel: "Origin Country/City",
        passengersLabel: "Number of passengers",
        luggageLabel: "Amount of luggage",
        priceLabel: "Total price",
        depositLabel: "Deposit amount",
        paymentMethodLabel: "Payment method",
        selectMethodOption: "Select method",
        cashOption: "Cash",
        transferOption: "Bank Transfer",
        creditCardOption: "Credit Card",
        debitCardOption: "Debit Card",
        currencyLabel: "Currency",
        arsOption: "Argentine Pesos",
        usdOption: "US Dollars",
        eurOption: "Euros",
        brlOption: "Brazilian Reals",
        receiptLabel: "Payment receipt",
        notesLabel: "Additional notes",
        submitButton: "Send Reservation via WhatsApp",
        sendingButton: "Sending...",
        fieldRequiredError: "This field is required.",
        atLeastOneExcursionError: "Please select at least one excursion or detail a custom one.",
        notificationSent: "Reservation sent!",
        modalTitles: {
            'transfer-in': "Transfer IN Booking",
            'transfer-out': "Transfer OUT Booking",
            'transfer-in-out': "Transfer IN + OUT Booking",
            'excursions': "Excursion Booking",
            'transfer-different': "Booking for Transfer with Different Destinations",
            'transfer-normal': "Standard Transfer Booking",
            'transfer-all': "Booking for Transfer IN/OUT + Excursions"
        },
        formFieldLabels: {
            airportOrigin: "Origin (airport)",
            destination: "Destination (hotel/address)",
            arrivalDate: "Arrival date",
            flightTime: "Arrival flight time",
            flightNumber: "Arrival flight number",
            hotelOrigin: "Origin (hotel/address)",
            airportDestination: "Destination (airport)",
            transferDate: "Transfer date",
            departureTime: "Pickup time",
            flightTimeOut: "Departure flight time",
            flightNumberOut: "Departure flight number",
            excursionDetails: "Excursion details (name, date, etc.)",
            departureDate: "Departure date",
            selectExcursions: "Select excursions (*)",
            customExcursionDetails: "Custom excursion",
            transferInHeading: "Transfer IN Details",
            transferOutHeading: "Transfer OUT Details",
            excursionDate: "Date",
            excursionTime: "Time"
        },
        excursionOptions: {
            cataratasArgentinas: "Argentinian Falls",
            cataratasBrasilenas: "Brazilian Falls",
            parqueDeLasAves: "Bird Park",
            minasDeWanda: "Wanda Mines",
            ruinasDeSanIgnacio: "San Ignacio Ruins",
            museoDeCera: "Wax Museum",
            rafainCenaShow: "Rafain Dinner Show",
            tourDeComprasParaguay: "Shopping Tour Paraguay",
            cooperativaYerbatera: "Andresito Yerba Mate Cooperative",
            paseoLunaLlena: "Full Moon Walk",
            saltoDelMocona: "Moconá Falls",
            parqueDeLaCruz: "De la Cruz Park",
            dutyFreeShop: "Duty Free Shop",
            cataratasBrAvesDuty: "BR Falls + Bird Park + Duty Free",
            flyFoz: "FlyFoz Skydiving",
            parqueAventuraMonday: "Monday Adventure Park",
            represaItaipu: "Itaipu Dam",
            shoppingCatuaí: "Catuaí Palladium Shopping",
            cataratasArgDuty: "Argentinian Falls + Duty Free Shop"
        },
        confirmationTitle: "Reservation Sent!",
        confirmationMessageDefault: "Your reservation request has been sent via WhatsApp. We will contact you shortly to confirm all the details.",
        confirmationTipsDefaultTitle: "Tips for your trip:",
        confirmationTipsDefault: "Make sure you have your flight details handy.|If there are any changes to your itinerary, please let us know in advance.|Get your camera ready so you don't miss anything in Iguazú!",
        confirmationMessageExcursions: "Your request has been sent. We've included links to add the events to your calendar. We will contact you to confirm.",
        confirmationTipsExcursionsTitle: "Tips for your excursions:",
        confirmationTipsExcursions: "Wear comfortable clothing, sunscreen, and insect repellent.|Don't forget your ID or passport.|Enjoy the adventure and the majesty of nature!",
        closeButton: "Close",
        addToCalendarLabel: "Add events to calendar",
        linkCopiedNotification: "Link copied to clipboard!",
        shareLinkButton: "Share Link",
        shareLinkTitle: "Share page link",
        shareMessage: "Share this service with others:",
        copyLinkTitle: "Copy link",
        nativeShareButton: "Share via...",
    },
    pt: {
        mainTitle: "Waterfalls Traslados Aeroporto",
        subtitle: "Selecione seu serviço",
        transferInTitle: "Transfer IN",
        transferInDesc: "Serviço de traslado do aeroporto para o seu destino em Puerto Iguazú.",
        transferOutTitle: "Transfer OUT",
        transferOutDesc: "Traslado da sua localização para o aeroporto para o seu voo.",
        transferInOutTitle: "Transfer IN + OUT",
        transferInOutDesc: "Serviço completo de ida e volta do aeroporto.",
        excursionsTitle: "Excursões",
        excursionsDesc: "Passeios e atividades na região da Tríplice Fronteira.",
        transferDifferentTitle: "Transfer IN + OUT Dif.",
        transferDifferentDesc: "Serviço com diferentes destinos de chegada e partida.",
        transferNormalTitle: "Transfer normal",
        transferNormalDesc: "Traslados locais dentro de Puerto Iguazú e arredores.",
        transferAllTitle: "Transfer IN/OUT + Excursões",
        transferAllDesc: "Combine seu serviço de traslado IN/OUT com nossas excursões.",
        footerText: "Traslados Nacionais & Internacionais - Puerto Iguazú, Misiones, Argentina",
        fullNameLabel: "Nome completo",
        whatsappLabel: "Contato do WhatsApp",
        originLabel: "Procedência",
        passengersLabel: "Quantidade de passageiros",
        luggageLabel: "Quantidade de bagagem",
        priceLabel: "Preço total",
        depositLabel: "Valor do sinal",
        paymentMethodLabel: "Método de pagamento",
        selectMethodOption: "Selecionar método",
        cashOption: "Dinheiro",
        transferOption: "Transferência",
        creditCardOption: "Cartão de Crédito",
        debitCardOption: "Cartão de Débito",
        currencyLabel: "Moeda",
        arsOption: "Pesos argentinos",
        usdOption: "Dólares americanos",
        eurOption: "Euros",
        brlOption: "Reais",
        receiptLabel: "Comprovante de pagamento",
        notesLabel: "Notas adicionais",
        submitButton: "Enviar Reserva pelo WhatsApp",
        sendingButton: "Enviando...",
        fieldRequiredError: "Este campo é obrigatório.",
        atLeastOneExcursionError: "Por favor, selecione pelo menos uma excursão ou detalhe uma personalizada.",
        notificationSent: "Reserva enviada!",
        modalTitles: {
            'transfer-in': "Reserva de Transfer IN",
            'transfer-out': "Reserva de Transfer OUT",
            'transfer-in-out': "Reserva de Transfer IN + OUT",
            'excursions': "Reserva de Excursão",
            'transfer-different': "Reserva de Transfer com Destinos Diferentes",
            'transfer-normal': "Reserva de Transfer Normal",
            'transfer-all': "Reserva de Transfer IN/OUT + Excursões"
        },
        formFieldLabels: {
            airportOrigin: "Origem (aeroporto)",
            destination: "Destino (hotel/endereço)",
            arrivalDate: "Data de chegada",
            flightTime: "Horário do voo de chegada",
            flightNumber: "Número do voo de chegada",
            hotelOrigin: "Origem (hotel/endereço)",
            airportDestination: "Destino (aeroporto)",
            transferDate: "Data de traslado",
            departureTime: "Horário de recolha",
            flightTimeOut: "Horário do voo de saída",
            flightNumberOut: "Número do voo de saída",
            excursionDetails: "Detalhes da excursão (nome, data, etc.)",
            departureDate: "Data de saída",
            selectExcursions: "Seleção de excursões (*)",
            customExcursionDetails: "Excursão personalizada",
            transferInHeading: "Dados do Transfer IN",
            transferOutHeading: "Dados do Transfer OUT",
            excursionDate: "Data",
            excursionTime: "Hora"
        },
        excursionOptions: {
            cataratasArgentinas: "Cataratas Argentinas",
            cataratasBrasilenas: "Cataratas Brasileiras",
            parqueDeLasAves: "Parque das Aves",
            minasDeWanda: "Minas de Wanda",
            ruinasDeSanIgnacio: "Ruínas de San Ignacio",
            museoDeCera: "Museu de Cera",
            rafainCenaShow: "Rafain Jantar Show",
            tourDeComprasParaguay: "Tour de Compras Paraguai",
            cooperativaYerbatera: "Cooperativa Ervateira Andresito",
            paseoLunaLlena: "Passeio da Lua Cheia",
            saltoDelMocona: "Salto do Moconá",
            parqueDeLaCruz: "Parque da Cruz",
            dutyFreeShop: "Duty Free Shop",
            cataratasBrAvesDuty: "Cataratas BR + Parque das Aves + Duty Free",
            flyFoz: "FlyFoz Paraquedismo",
            parqueAventuraMonday: "Parque Aventura Monday",
            represaItaipu: "Represa de Itaipu",
            shoppingCatuaí: "Shopping Catuaí Palladium",
            cataratasArgDuty: "Cataratas Argentinas + Duty Free Shop"
        },
        confirmationTitle: "Reserva Enviada!",
        confirmationMessageDefault: "Sua solicitação de reserva foi enviada pelo WhatsApp. Entraremos em contato em breve para confirmar todos os detalhes.",
        confirmationTipsDefaultTitle: "Dicas para sua viagem:",
        confirmationTipsDefault: "Certifique-se de ter os detalhes do seu voo em mãos.|Se houver alguma alteração no seu itinerário, avise-nos com antecedência.|Prepare sua câmera para não perder nada de Iguaçu!",
        confirmationMessageExcursions: "Sua solicitação foi enviada. Incluímos links para você adicionar os eventos ao seu calendário. Entraremos em contato para confirmar.",
        confirmationTipsExcursionsTitle: "Dicas para suas excursões:",
        confirmationTipsExcursions: "Use roupas confortáveis, protetor solar e repelente de insetos.|Não se esqueça do seu documento de identidade ou passaporte.|Aproveite a aventura e a majestade da natureza!",
        closeButton: "Fechar",
        addToCalendarLabel: "Adicionar eventos ao calendário",
        linkCopiedNotification: "Link copiado para a área de transferência!",
        shareLinkButton: "Compartilhar Link",
        shareLinkTitle: "Compartilhar link da página",
        shareMessage: "Compartilhe este serviço com outros:",
        copyLinkTitle: "Copiar link",
        nativeShareButton: "Compartilhar via...",
    },
    zh: {
        mainTitle: "瀑布机场接送",
        subtitle: "选择您的服务",
        transferInTitle: "接机服务",
        transferInDesc: "从机场到您在伊瓜苏港目的地的接送服务。",
        transferOutTitle: "送机服务",
        transferOutDesc: "从您的位置到机场的送机服务。",
        transferInOutTitle: "接送机服务",
        transferInOutDesc: "完整的往返机场接送服务。",
        excursionsTitle: "游览",
        excursionsDesc: "三边界地区的旅游和活动。",
        transferDifferentTitle: "不同地点接送",
        transferDifferentDesc: "提供不同到达和离开目的地的服务。",
        transferNormalTitle: "普通接送",
        transferNormalDesc: "伊瓜苏港及其周边的本地接送。",
        transferAllTitle: "接送机 + 游览",
        transferAllDesc: "将您的接送机服务与我们的游览相结合。",
        footerText: "国内和国际接送 - 阿根廷米西奥内斯省伊瓜苏港",
        fullNameLabel: "全名",
        whatsappLabel: "WhatsApp 联系方式",
        originLabel: "来源地",
        passengersLabel: "乘客人数",
        luggageLabel: "行李数量",
        priceLabel: "总价",
        depositLabel: "定金金额",
        paymentMethodLabel: "付款方式",
        selectMethodOption: "选择方式",
        cashOption: "现金",
        transferOption: "银行转账",
        creditCardOption: "信用卡",
        debitCardOption: "借记卡",
        currencyLabel: "货币",
        arsOption: "阿根廷比索",
        usdOption: "美元",
        eurOption: "欧元",
        brlOption: "巴西雷亚尔",
        receiptLabel: "付款凭证",
        notesLabel: "附加说明",
        submitButton: "通过WhatsApp发送预订",
        sendingButton: "发送中...",
        fieldRequiredError: "此字段为必填项。",
        atLeastOneExcursionError: "请至少选择一项游览或详细说明自定义游览。",
        notificationSent: "预订已发送！",
        modalTitles: {
            'transfer-in': "接机服务预订",
            'transfer-out': "送机服务预订",
            'transfer-in-out': "接送机服务预订",
            'excursions': "游览预订",
            'transfer-different': "不同目的地接送预订",
            'transfer-normal': "普通接送预订",
            'transfer-all': "接送机 + 游览预订"
        },
        formFieldLabels: {
            airportOrigin: "出发地（机场）",
            destination: "目的地（酒店/地址）",
            arrivalDate: "到达日期",
            flightTime: "到达航班时间",
            flightNumber: "到达航班号",
            hotelOrigin: "出发地（酒店/地址）",
            airportDestination: "目的地（机场）",
            transferDate: "接送日期",
            departureTime: "接送时间",
            flightTimeOut: "出发航班时间",
            flightNumberOut: "出发航班号",
            excursionDetails: "游览详情（名称、日期等）",
            departureDate: "出发日期",
            selectExcursions: "选择游览 (*)",
            customExcursionDetails: "自定义游览",
            transferInHeading: "接机详情",
            transferOutHeading: "送机详情",
            excursionDate: "日期",
            excursionTime: "时间"
        },
        excursionOptions: {
            cataratasArgentinas: "阿根廷瀑布",
            cataratasBrasilenas: "巴西瀑布",
            parqueDeLasAves: "鸟园",
            minasDeWanda: "万达矿山",
            ruinasDeSanIgnacio: "圣伊格纳西奥遗址",
            museoDeCera: "蜡像馆",
            rafainCenaShow: "拉斐恩晚餐秀",
            tourDeComprasParaguay: "巴拉圭购物之旅",
            cooperativaYerbatera: "安德烈西托马黛茶合作社",
            paseoLunaLlena: "月圆漫步",
            saltoDelMocona: "莫科纳瀑布",
            parqueDeLaCruz: "十字公园",
            dutyFreeShop: "免税店",
            cataratasBrAvesDuty: "巴西瀑布 + 鸟园 + 免税店",
            flyFoz: "FlyFoz 跳伞",
            parqueAventuraMonday: "星期一冒险公园",
            represaItaipu: "伊泰普大坝",
            shoppingCatuaí: "卡图艾帕拉迪购物中心",
            cataratasArgDuty: "阿根廷瀑布 + 免税店"
        },
        confirmationTitle: "预订已发送！",
        confirmationMessageDefault: "您的预订请求已通过WhatsApp发送。我们将尽快与您联系以确认所有细节。",
        confirmationTipsDefaultTitle: "旅行提示：",
        confirmationTipsDefault: "请确保您手头有航班详细信息。|如果您的行程有任何变更，请提前通知我们。|准备好您的相机，不要错过伊瓜苏的任何美景！",
        confirmationMessageExcursions: "您的请求已发送。我们已包含将活动添加到日历的链接。我们将联系您进行确认。",
        confirmationTipsExcursionsTitle: "游览提示：",
        confirmationTipsExcursions: "穿着舒适的衣物、防晒霜和驱虫剂。|不要忘记您的身份证或护照。|享受冒险和壮丽的自然风光！",
        closeButton: "关闭",
        addToCalendarLabel: "将活动添加到日历",
        linkCopiedNotification: "链接已复制到剪贴板！",
        shareLinkButton: "分享链接",
        shareLinkTitle: "分享页面链接",
        shareMessage: "与他人分享此服务：",
        copyLinkTitle: "复制链接",
        nativeShareButton: "通过...分享",
    },
    ja: {
        mainTitle: "ウォーターフォールズ空港送迎",
        subtitle: "サービスを選択してください",
        transferInTitle: "空港お迎え",
        transferInDesc: "空港からプエルト・イグアスの目的地までの送迎サービス。",
        transferOutTitle: "空港お送り",
        transferOutDesc: "ご指定の場所から空港までの送迎サービス。",
        transferInOutTitle: "往復空港送迎",
        transferInOutDesc: "空港との往復送迎サービス一式。",
        excursionsTitle: "エクスカーション",
        excursionsDesc: "三国国境地帯のツアーとアクティビティ。",
        transferDifferentTitle: "異なる場所への送迎",
        transferDifferentDesc: "到着地と出発地が異なる送迎サービス。",
        transferNormalTitle: "通常送迎",
        transferNormalDesc: "プエルト・イグアス市内および周辺のローカル送迎。",
        transferAllTitle: "往復送迎 + エクスカーション",
        transferAllDesc: "往復送迎サービスとエクスカーションを組み合わせます。",
        footerText: "国内・国際送迎 - アルゼンチン、ミシオネス州、プエルト・イグアス",
        fullNameLabel: "氏名",
        whatsappLabel: "WhatsApp連絡先",
        originLabel: "出発地",
        passengersLabel: "乗客数",
        luggageLabel: "荷物量",
        priceLabel: "合計料金",
        depositLabel: "デポジット額",
        paymentMethodLabel: "支払い方法",
        selectMethodOption: "方法を選択",
        cashOption: "現金",
        transferOption: "銀行振込",
        creditCardOption: "クレジットカード",
        debitCardOption: "デビットカード",
        currencyLabel: "通貨",
        arsOption: "アルゼンチンペソ",
        usdOption: "米ドル",
        eurOption: "ユーロ",
        brlOption: "ブラジルレアル",
        receiptLabel: "支払い証明書",
        notesLabel: "追加の注意事項",
        submitButton: "WhatsAppで予約を送信",
        sendingButton: "送信中...",
        fieldRequiredError: "このフィールドは必須です。",
        atLeastOneExcursionError: "少なくとも1つのエクスカーションを選択するか、カスタムエクスカーションを詳述してください。",
        notificationSent: "予約が送信されました！",
        modalTitles: {
            'transfer-in': "空港お迎え予約",
            'transfer-out': "空港お送り予約",
            'transfer-in-out': "往復空港送迎予約",
            'excursions': "エクスカーション予約",
            'transfer-different': "異なる目的地への送迎予約",
            'transfer-normal': "通常送迎予約",
            'transfer-all': "往復送迎 + エクスカーション予約"
        },
        formFieldLabels: {
            airportOrigin: "出発地（空港）",
            destination: "目的地（ホテル/住所）",
            arrivalDate: "到着日",
            flightTime: "到着便の時刻",
            flightNumber: "到着便名",
            hotelOrigin: "出発地（ホテル/住所）",
            airportDestination: "目的地（空港）",
            transferDate: "送迎日",
            departureTime: "お迎え時間",
            flightTimeOut: "出発便の時刻",
            flightNumberOut: "出発便名",
            excursionDetails: "エクスカーション詳細（名称、日付など）",
            departureDate: "出発日",
            selectExcursions: "エクスカーションを選択 (*)",
            customExcursionDetails: "カスタムエクスカーション",
            transferInHeading: "お迎え詳細",
            transferOutHeading: "お送り詳細",
            excursionDate: "日付",
            excursionTime: "時間"
        },
        excursionOptions: {
            cataratasArgentinas: "アルゼンチン側の滝",
            cataratasBrasilenas: "ブラジル側の滝",
            parqueDeLasAves: "鳥公園",
            minasDeWanda: "ワンダ鉱山",
            ruinasDeSanIgnacio: "サン・イグナシオ遺跡",
            museoDeCera: "蝋人形館",
            rafainCenaShow: "ラファインディナーショー",
            tourDeComprasParaguay: "パラグアイショッピングツアー",
            cooperativaYerbatera: "アンドレシト・マテ茶協同組合",
            paseoLunaLlena: "満月ウォーク",
            saltoDelMocona: "モコナの滝",
            parqueDeLaCruz: "クルス公園",
            dutyFreeShop: "免税店",
            cataratasBrAvesDuty: "ブラジル側の滝 + 鳥公園 + 免税店",
            flyFoz: "フライフォズ・スカイダイビング",
            parqueAventuraMonday: "マンデーアドベンチャーパーク",
            represaItaipu: "イタイプダム",
            shoppingCatuaí: "カトゥアイ・パラディウム・ショッピング",
            cataratasArgDuty: "アルゼンチン側の滝 + 免税店"
        },
        confirmationTitle: "予約が送信されました！",
        confirmationMessageDefault: "予約リクエストはWhatsAppで送信されました。詳細は追ってご連絡いたします。",
        confirmationTipsDefaultTitle: "旅行のヒント：",
        confirmationTipsDefault: "フライトの詳細をお手元にご用意ください。|旅程に変更がある場合は、事前にお知らせください。|イグアスの素晴らしい景色を見逃さないように、カメラをご準備ください！",
        confirmationMessageExcursions: "リクエストが送信されました。イベントをカレンダーに追加するためのリンクが含まれています。確認のためご連絡いたします。",
        confirmationTipsExcursionsTitle: "エクスカーションのヒント：",
        confirmationTipsExcursions: "快適な服装、日焼け止め、虫除けをご着用ください。|IDまたはパスポートをお忘れなく。|冒険と雄大な自然をお楽しみください！",
        closeButton: "閉じる",
        addToCalendarLabel: "イベントをカレンダーに追加",
        linkCopiedNotification: "リンクがクリップボードにコピーされました！",
        shareLinkButton: "リンクを共有",
        shareLinkTitle: "ページリンクを共有",
        shareMessage: "このサービスを他の人と共有する：",
        copyLinkTitle: "リンクをコピー",
        nativeShareButton: "経由で共有...",
    }
};

const formConfigs: { [key: string]: FormConfig } = {
    'transfer-in': {
        titleKey: "transferInTitle",
        color: "#00D1FF",
        colorDark: "#0099CC",
        colorRgb: "0, 209, 255",
        fields: [
            { id: 'airportOrigin', name: 'airportOrigin', type: 'text', labelKey: 'formFieldLabels.airportOrigin', required: true },
            { id: 'destination', name: 'destination', type: 'text', labelKey: 'formFieldLabels.destination', required: true },
            { id: 'arrivalDate', name: 'arrivalDate', type: 'date', labelKey: 'formFieldLabels.arrivalDate', required: true },
            { id: 'flightTime', name: 'flightTime', type: 'time', labelKey: 'formFieldLabels.flightTime', required: true },
            { id: 'flightNumber', name: 'flightNumber', type: 'text', labelKey: 'formFieldLabels.flightNumber', required: true },
        ]
    },
    'transfer-out': {
        titleKey: "transferOutTitle",
        color: "#00FF99",
        colorDark: "#00CC7A",
        colorRgb: "0, 255, 153",
        fields: [
            { id: 'hotelOrigin', name: 'hotelOrigin', type: 'text', labelKey: 'formFieldLabels.hotelOrigin', required: true },
            { id: 'airportDestination', name: 'airportDestination', type: 'text', labelKey: 'formFieldLabels.airportDestination', required: true },
            { id: 'departureDate', name: 'departureDate', type: 'date', labelKey: 'formFieldLabels.departureDate', required: true },
            { id: 'departureTime', name: 'departureTime', type: 'time', labelKey: 'formFieldLabels.departureTime', required: true },
            { id: 'flightTimeOut', name: 'flightTimeOut', type: 'time', labelKey: 'formFieldLabels.flightTimeOut', required: true },
            { id: 'flightNumberOut', name: 'flightNumberOut', type: 'text', labelKey: 'formFieldLabels.flightNumberOut', required: false },
        ]
    },
    'transfer-in-out': {
        titleKey: "transferInOutTitle",
        color: "#B300FF",
        colorDark: "#8F00CC",
        colorRgb: "179, 0, 255",
        fields: [
            { id: 'transferInHeading', name: 'transferInHeading', type: 'heading', labelKey: 'formFieldLabels.transferInHeading', required: false },
            { id: 'airportOrigin', name: 'airportOrigin', type: 'text', labelKey: 'formFieldLabels.airportOrigin', required: true },
            { id: 'destination', name: 'destination', type: 'text', labelKey: 'formFieldLabels.destination', required: true },
            { id: 'arrivalDate', name: 'arrivalDate', type: 'date', labelKey: 'formFieldLabels.arrivalDate', required: true },
            { id: 'flightTime', name: 'flightTime', type: 'time', labelKey: 'formFieldLabels.flightTime', required: true },
            { id: 'flightNumber', name: 'flightNumber', type: 'text', labelKey: 'formFieldLabels.flightNumber', required: true },
            { id: 'transferOutHeading', name: 'transferOutHeading', type: 'heading', labelKey: 'formFieldLabels.transferOutHeading', required: false },
            { id: 'departureDate', name: 'departureDate', type: 'date', labelKey: 'formFieldLabels.departureDate', required: true },
            { id: 'departureTime', name: 'departureTime', type: 'time', labelKey: 'formFieldLabels.departureTime', required: true },
            { id: 'flightTimeOut', name: 'flightTimeOut', type: 'time', labelKey: 'formFieldLabels.flightTimeOut', required: true },
            { id: 'flightNumberOut', name: 'flightNumberOut', type: 'text', labelKey: 'formFieldLabels.flightNumberOut', required: false },
        ]
    },
    'excursions': {
        titleKey: "excursionsTitle",
        color: "#FF6200",
        colorDark: "#CC4E00",
        colorRgb: "255, 98, 0",
        hasCustomExcursion: true,
        fields: [],
        excursions: [
            { id: "cataratasArgentinas", key: "excursionOptions.cataratasArgentinas" },
            { id: "cataratasBrasilenas", key: "excursionOptions.cataratasBrasilenas" },
            { id: "parqueDeLasAves", key: "excursionOptions.parqueDeLasAves" },
            { id: "minasDeWanda", key: "excursionOptions.minasDeWanda" },
            { id: "ruinasDeSanIgnacio", key: "excursionOptions.ruinasDeSanIgnacio" },
            { id: "museoDeCera", key: "excursionOptions.museoDeCera" },
            { id: "rafainCenaShow", key: "excursionOptions.rafainCenaShow" },
            { id: "tourDeComprasParaguay", key: "excursionOptions.tourDeComprasParaguay" },
            { id: "cooperativaYerbatera", key: "excursionOptions.cooperativaYerbatera" },
            { id: "paseoLunaLlena", key: "excursionOptions.paseoLunaLlena" },
            { id: "saltoDelMocona", key: "excursionOptions.saltoDelMocona" },
            { id: "parqueDeLaCruz", key: "excursionOptions.parqueDeLaCruz" },
            { id: "dutyFreeShop", key: "excursionOptions.dutyFreeShop" },
            { id: "cataratasBrAvesDuty", key: "excursionOptions.cataratasBrAvesDuty" },
            { id: "flyFoz", key: "excursionOptions.flyFoz" },
            { id: "parqueAventuraMonday", key: "excursionOptions.parqueAventuraMonday" },
            { id: "represaItaipu", key: "excursionOptions.represaItaipu" },
            { id: "shoppingCatuaí", key: "excursionOptions.shoppingCatuaí" },
            { id: "cataratasArgDuty", key: "excursionOptions.cataratasArgDuty" }
        ]
    },
    'transfer-different': {
        titleKey: "transferDifferentTitle",
        color: "#FF00B3",
        colorDark: "#CC008F",
        colorRgb: "255, 0, 179",
        fields: [
            { id: 'transferInHeading', name: 'transferInHeading', type: 'heading', labelKey: 'formFieldLabels.transferInHeading', required: false },
            { id: 'airportOrigin', name: 'airportOrigin', type: 'text', labelKey: 'formFieldLabels.airportOrigin', required: true },
            { id: 'destination', name: 'destination', type: 'text', labelKey: 'formFieldLabels.destination', required: true },
            { id: 'arrivalDate', name: 'arrivalDate', type: 'date', labelKey: 'formFieldLabels.arrivalDate', required: true },
            { id: 'flightTime', name: 'flightTime', type: 'time', labelKey: 'formFieldLabels.flightTime', required: true },
            { id: 'flightNumber', name: 'flightNumber', type: 'text', labelKey: 'formFieldLabels.flightNumber', required: true },
            { id: 'transferOutHeading', name: 'transferOutHeading', type: 'heading', labelKey: 'formFieldLabels.transferOutHeading', required: false },
            { id: 'hotelOrigin', name: 'hotelOrigin', type: 'text', labelKey: 'formFieldLabels.hotelOrigin', required: true },
            { id: 'airportDestination', name: 'airportDestination', type: 'text', labelKey: 'formFieldLabels.airportDestination', required: true },
            { id: 'departureDate', name: 'departureDate', type: 'date', labelKey: 'formFieldLabels.departureDate', required: true },
            { id: 'departureTime', name: 'departureTime', type: 'time', labelKey: 'formFieldLabels.departureTime', required: true },
            { id: 'flightTimeOut', name: 'flightTimeOut', type: 'time', labelKey: 'formFieldLabels.flightTimeOut', required: true },
            { id: 'flightNumberOut', name: 'flightNumberOut', type: 'text', labelKey: 'formFieldLabels.flightNumberOut', required: false },
        ]
    },
    'transfer-normal': {
        titleKey: "transferNormalTitle",
        color: "#00FFEA",
        colorDark: "#00CCBB",
        colorRgb: "0, 255, 234",
        fields: [
            { id: 'hotelOrigin', name: 'hotelOrigin', type: 'text', labelKey: 'formFieldLabels.hotelOrigin', required: true },
            { id: 'destination', name: 'destination', type: 'text', labelKey: 'formFieldLabels.destination', required: true },
            { id: 'transferDate', name: 'transferDate', type: 'date', labelKey: 'formFieldLabels.transferDate', required: true },
            { id: 'departureTime', name: 'departureTime', type: 'time', labelKey: 'formFieldLabels.departureTime', required: true },
        ]
    },
    'transfer-all': {
        titleKey: "transferAllTitle",
        color: "#FFFF00",
        colorDark: "#CCCC00",
        colorRgb: "255, 255, 0",
        hasCustomExcursion: true,
        fields: [
            { id: 'transferInHeading', name: 'transferInHeading', type: 'heading', labelKey: 'formFieldLabels.transferInHeading', required: false },
            { id: 'airportOrigin', name: 'airportOrigin', type: 'text', labelKey: 'formFieldLabels.airportOrigin', required: false },
            { id: 'destination', name: 'destination', type: 'text', labelKey: 'formFieldLabels.destination', required: false },
            { id: 'arrivalDate', name: 'arrivalDate', type: 'date', labelKey: 'formFieldLabels.arrivalDate', required: false },
            { id: 'flightTime', name: 'flightTime', type: 'time', labelKey: 'formFieldLabels.flightTime', required: false },
            { id: 'flightNumber', name: 'flightNumber', type: 'text', labelKey: 'formFieldLabels.flightNumber', required: false },
            { id: 'transferOutHeading', name: 'transferOutHeading', type: 'heading', labelKey: 'formFieldLabels.transferOutHeading', required: false },
            { id: 'hotelOrigin', name: 'hotelOrigin', type: 'text', labelKey: 'formFieldLabels.hotelOrigin', required: false },
            { id: 'airportDestination', name: 'airportDestination', type: 'text', labelKey: 'formFieldLabels.airportDestination', required: false },
            { id: 'departureDate', name: 'departureDate', type: 'date', labelKey: 'formFieldLabels.departureDate', required: false },
            { id: 'departureTime', name: 'departureTime', type: 'time', labelKey: 'formFieldLabels.departureTime', required: false },
            { id: 'flightTimeOut', name: 'flightTimeOut', type: 'time', labelKey: 'formFieldLabels.flightTimeOut', required: false },
            { id: 'flightNumberOut', name: 'flightNumberOut', type: 'text', labelKey: 'formFieldLabels.flightNumberOut', required: false },
        ],
        excursions: [
            { id: "cataratasArgentinas", key: "excursionOptions.cataratasArgentinas" },
            { id: "cataratasBrasilenas", key: "excursionOptions.cataratasBrasilenas" },
            { id: "parqueDeLasAves", key: "excursionOptions.parqueDeLasAves" },
            { id: "minasDeWanda", key: "excursionOptions.minasDeWanda" },
            { id: "ruinasDeSanIgnacio", key: "excursionOptions.ruinasDeSanIgnacio" },
            { id: "museoDeCera", key: "excursionOptions.museoDeCera" },
            { id: "rafainCenaShow", key: "excursionOptions.rafainCenaShow" },
            { id: "tourDeComprasParaguay", key: "excursionOptions.tourDeComprasParaguay" },
            { id: "cooperativaYerbatera", key: "excursionOptions.cooperativaYerbatera" },
            { id: "paseoLunaLlena", key: "excursionOptions.paseoLunaLlena" },
            { id: "saltoDelMocona", key: "excursionOptions.saltoDelMocona" },
            { id: "parqueDeLaCruz", key: "excursionOptions.parqueDeLaCruz" },
            { id: "dutyFreeShop", key: "excursionOptions.dutyFreeShop" },
            { id: "cataratasBrAvesDuty", key: "excursionOptions.cataratasBrAvesDuty" },
            { id: "flyFoz", key: "excursionOptions.flyFoz" },
            { id: "parqueAventuraMonday", key: "excursionOptions.parqueAventuraMonday" },
            { id: "represaItaipu", key: "excursionOptions.represaItaipu" },
            { id: "shoppingCatuaí", key: "excursionOptions.shoppingCatuaí" },
            { id: "cataratasArgDuty", key: "excursionOptions.cataratasArgDuty" }
        ]
    }
};

// --- GLOBAL STATE ---
let currentLang = 'es';

// --- UTILITY FUNCTIONS ---
const getTranslation = (key: string, options?: any): string | object => {
    const langDict = translations[currentLang] || translations.es;
    const keyParts = key.split('.');
    let value: any = langDict;
    for (const part of keyParts) {
        if (value && typeof value === 'object' && part in value) {
            value = value[part];
        } else {
            return key; // Return key if not found
        }
    }
    return value;
};

const escapeHtml = (unsafe: string): string => {
    if (!unsafe) return '';
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

const showNotification = (messageKey: string) => {
    const notification = document.getElementById('notification') as HTMLElement;
    const message = getTranslation(messageKey) as string;
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

const shortenUrl = async (url: string): Promise<string> => {
    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            return await response.text();
        }
    } catch (error) {
        console.error("Could not shorten URL, using original.", error);
    }
    return url; // Fallback to the original URL
};

// --- DOM MANIPULATION & EVENT HANDLERS ---
const applyTranslations = () => {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (key) {
            const translation = getTranslation(key) as string;
            if (translation) {
                element.textContent = translation;
            }
        }
    });
    document.querySelectorAll('[data-translate-key-title]').forEach(element => {
        const key = element.getAttribute('data-translate-key-title');
        if (key) {
            const translation = getTranslation(key) as string;
            if (translation) {
                element.setAttribute('title', translation);
            }
        }
    });
};

const createFormField = (field: FormField): string => {
    const t = (key: string) => getTranslation(key) as string;
    const labelText = t(field.labelKey);

    if (field.type === 'heading') {
        return `<h3 class="form-section-heading">${labelText}</h3>`;
    }

    const requiredSpan = field.required ? `<span class="required">*</span>` : '';
    let inputHtml = '';

    switch(field.type) {
        case 'select':
            const optionsHtml = field.options?.map(opt => 
                `<option value="${opt.value}" data-translate-key="${opt.key}">${t(opt.key)}</option>`
            ).join('');
            inputHtml = `<select id="${field.id}" name="${field.name}" ${field.required ? 'required' : ''}>${optionsHtml}</select>`;
            break;
        case 'textarea':
             inputHtml = `<textarea id="${field.id}" name="${field.name}" rows="3"></textarea>`;
             break;
        default:
            inputHtml = `<input type="${field.type}" id="${field.id}" name="${field.name}" ${field.required ? 'required' : ''} ${field.type === 'number' ? 'min="0"' : ''}>`;
    }
    
    return `
        <div class="form-group">
            <label for="${field.id}">${labelText} ${requiredSpan}</label>
            ${inputHtml}
            <div class="error-message" data-translate-key="fieldRequiredError">${t('fieldRequiredError')}</div>
        </div>
    `;
};

const createExcursionFields = (excursions: ExcursionField[], hasCustom: boolean): string => {
    const t = (key: string) => getTranslation(key) as string;
    const excursionsHtml = excursions.map(ex => {
        const label = t(ex.key);
        return `
            <div class="excursion-item">
                <div class="excursion-selector">
                    <input type="checkbox" id="${ex.id}" name="excursion" value="${label}">
                    <label for="${ex.id}">${label}</label>
                </div>
                <div class="excursion-details">
                    <input type="date" name="${ex.id}-date" aria-label="${t('formFieldLabels.excursionDate')} for ${label}">
                    <input type="time" name="${ex.id}-time" aria-label="${t('formFieldLabels.excursionTime')} for ${label}">
                </div>
            </div>
        `;
    }).join('');

    const customExcursionHtml = hasCustom ? `
        <div class="excursion-item custom">
             <label for="customExcursionDetails" data-translate-key="formFieldLabels.customExcursionDetails">${t('formFieldLabels.customExcursionDetails')}</label>
             <textarea id="customExcursionDetails" name="customExcursionDetails" class="excursion-custom-textarea" rows="3"></textarea>
        </div>
    ` : '';
    
    const requiredSpan = `<span class="required">*</span>`;
    return `
        <div class="form-group">
            <label data-translate-key="formFieldLabels.selectExcursions">${t('formFieldLabels.selectExcursions')} ${requiredSpan}</label>
            <div class="excursions-list">${excursionsHtml}</div>
            <div class="error-message" data-translate-key="atLeastOneExcursionError"></div>
        </div>
        ${customExcursionHtml}
    `;
};

const setupExcursionEventListeners = () => {
    document.querySelectorAll('.excursion-selector input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            const detailsDiv = target.closest('.excursion-item')?.querySelector('.excursion-details') as HTMLElement;
            if (detailsDiv) {
                detailsDiv.style.display = target.checked ? 'flex' : 'none';
                detailsDiv.querySelectorAll('input').forEach(input => {
                    (input as HTMLInputElement).required = target.checked;
                });
            }
        });
    });
};

const openFormModal = (formType: string) => {
    const config = formConfigs[formType];
    if (!config) return;

    const modal = document.getElementById('formModal') as HTMLElement;
    const modalContent = modal.querySelector('.modal-content') as HTMLElement;
    const modalTitle = document.getElementById('modalTitle') as HTMLElement;
    const specificFieldsContainer = document.getElementById('formSpecificFields') as HTMLElement;
    const form = document.getElementById('reservationForm') as HTMLFormElement;

    form.reset();
    form.dataset.formType = formType;
    document.querySelectorAll('.error-message').forEach(el => (el as HTMLElement).style.display = 'none');
    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

    modalContent.style.setProperty('--modal-color', config.color);
    modalContent.style.setProperty('--modal-color-dark', config.colorDark);
    modalContent.style.setProperty('--modal-color-rgb', config.colorRgb);

    modalTitle.textContent = getTranslation(`modalTitles.${formType}`) as string;
    
    let specificFieldsHtml = config.fields.map(createFormField).join('');
    if (config.excursions) {
        specificFieldsHtml += createExcursionFields(config.excursions, !!config.hasCustomExcursion);
    }
    specificFieldsContainer.innerHTML = specificFieldsHtml;
    
    const luggageGroup = document.getElementById('luggage-group');
    if (luggageGroup) {
      luggageGroup.style.display = formType === 'excursions' ? 'none' : 'block';
    }

    setupExcursionEventListeners();
    applyTranslations(); // Re-apply for newly created elements
    modal.style.display = 'block';
};

const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLElement;
    if (modal) modal.style.display = 'none';
};

const generateGoogleCalendarLink = (details: CalendarEvent): string => {
    if (!details.date || !details.time) return '';

    const timeZone = 'America/Argentina/Buenos_Aires';
    
    const startDateObj = new Date(`${details.date}T${details.time}`);
    if (isNaN(startDateObj.getTime())) return '';
    const endDateObj = new Date(startDateObj.getTime() + 60 * 60 * 1000); // Assume 1 hour duration

    const formatLocalDateTime = (d: Date): string => {
        const YYYY = d.getFullYear();
        const MM = (d.getMonth() + 1).toString().padStart(2, '0');
        const DD = d.getDate().toString().padStart(2, '0');
        const hh = d.getHours().toString().padStart(2, '0');
        const mm = d.getMinutes().toString().padStart(2, '0');
        const ss = d.getSeconds().toString().padStart(2, '0');
        return `${YYYY}${MM}${DD}T${hh}${mm}${ss}`;
    };

    const googleStartDate = formatLocalDateTime(startDateObj);
    const googleEndDate = formatLocalDateTime(endDateObj);

    const url = new URL('https://www.google.com/calendar/render');
    url.searchParams.set('action', 'TEMPLATE');
    url.searchParams.set('text', details.title);
    url.searchParams.set('dates', `${googleStartDate}/${googleEndDate}`);
    url.searchParams.set('ctz', timeZone);
    if (details.location) url.searchParams.set('location', details.location);
    if (details.description) url.searchParams.set('details', details.description);
    
    return url.toString();
};


const getReservationDetails = (form: HTMLFormElement): ReservationData => {
    const formData = new FormData(form);
    const details: ReservationDetail[] = [];
    const parsedExcursions: ParsedExcursion[] = [];
    const excursionCheckboxes = form.querySelectorAll('input[name="excursion"]:checked');

    const formElements = Array.from(form.elements) as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[];

    for (const element of formElements) {
        if (!element.name || element.type === 'submit' || element.type === 'checkbox') continue;
        
        const value = element.value.trim();
        if (!value) continue;

        const labelElement = element.previousElementSibling as HTMLLabelElement | null;
        let label = element.name;
        if (labelElement && labelElement.tagName === 'LABEL') {
            label = labelElement.textContent?.replace('*', '').trim() || label;
        } else {
             const labelFallback = form.querySelector(`label[for="${element.id}"]`);
             if (labelFallback) {
                 label = labelFallback.textContent?.replace('*', '').trim() || label;
             }
        }
        
        // Special handling for select elements to get translated text
        if (element.tagName === 'SELECT') {
            const selectElement = element as HTMLSelectElement;
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const translatedValue = selectedOption.textContent;
            details.push({ id: element.id, label, value: translatedValue || value });
        } else {
            details.push({ id: element.id, label, value });
        }
    }
    
    excursionCheckboxes.forEach(checkbox => {
        const excursionId = checkbox.id;
        const excursionName = (checkbox as HTMLInputElement).value;
        const dateInput = form.querySelector(`input[name="${excursionId}-date"]`) as HTMLInputElement;
        const timeInput = form.querySelector(`input[name="${excursionId}-time"]`) as HTMLInputElement;
        
        if (dateInput && timeInput) {
            parsedExcursions.push({
                id: excursionId,
                name: excursionName,
                date: dateInput.value,
                time: timeInput.value
            });
        }
    });

    return { details, excursions: parsedExcursions };
};

const validateForm = (form: HTMLFormElement): boolean => {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        const input = field as HTMLInputElement;
        const errorDiv = input.nextElementSibling as HTMLElement;
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('invalid');
            if (errorDiv && errorDiv.classList.contains('error-message')) {
                errorDiv.style.display = 'block';
            }
        } else {
            input.classList.remove('invalid');
            if (errorDiv && errorDiv.classList.contains('error-message')) {
                errorDiv.style.display = 'none';
            }
        }
    });

    const formType = form.dataset.formType;
    if (formType === 'excursions' || formType === 'transfer-all') {
        const excursionChecked = form.querySelector('input[name="excursion"]:checked');
        const customExcursionText = (form.querySelector('#customExcursionDetails') as HTMLTextAreaElement)?.value.trim();
        const excursionGroup = form.querySelector('.excursions-list')?.parentElement;
        if (!excursionChecked && !customExcursionText && excursionGroup) {
            isValid = false;
            const errorDiv = excursionGroup.querySelector('.error-message') as HTMLElement;
            if (errorDiv) errorDiv.style.display = 'block';
        } else if (excursionGroup) {
             const errorDiv = excursionGroup.querySelector('.error-message') as HTMLElement;
             if(errorDiv) errorDiv.style.display = 'none';
        }
    }

    return isValid;
};

const generateWhatsAppMessage = (
    formType: string,
    reservationData: ReservationData,
    calendarLinks: { name: string; link: string }[]
): string => {
    const t = (key: string) => getTranslation(key) as string;
    const findDetail = (id: string) => reservationData.details.find(d => d.id === id);

    let message = `*--- 🛎️ ${t(`modalTitles.${formType}`)} 🛎️ ---*\n\n`;

    // General Info
    const generalInfo: (ReservationDetail | undefined)[] = [
        findDetail('fullName'),
        findDetail('whatsapp'),
        findDetail('origin'),
        findDetail('passengers'),
        findDetail('luggage')
    ];

    generalInfo.forEach(detail => {
        if (detail) {
            const icons: { [key: string]: string } = { fullName: '👤', whatsapp: '📱', origin: '🌍', passengers: '👨‍👩‍👧‍👦', luggage: '🧳' };
            message += `${icons[detail.id] || '🔹'} *${detail.label}*: ${detail.value}\n`;
        }
    });
    
    // Transfer Details
    const transferInDetails = [findDetail('airportOrigin'), findDetail('destination'), findDetail('arrivalDate'), findDetail('flightTime'), findDetail('flightNumber')];
    const transferOutDetails = [findDetail('hotelOrigin'), findDetail('airportDestination'), findDetail('departureDate'), findDetail('departureTime'), findDetail('flightTimeOut'), findDetail('flightNumberOut')];
    const normalTransferDetails = [findDetail('hotelOrigin'), findDetail('destination'), findDetail('transferDate'), findDetail('departureTime')];

    const hasIn = transferInDetails.some(d => d);
    const hasOut = transferOutDetails.some(d => d);
    const hasNormal = normalTransferDetails.some(d => d);

    if (hasIn || hasOut || hasNormal) {
        message += `\n*--- ✈️ Detalles del Transfer ---*\n`;
        if (hasIn) {
            if(formType === 'transfer-in-out' || formType === 'transfer-different' || formType === 'transfer-all') message += `*${t('formFieldLabels.transferInHeading')}*\n`;
            transferInDetails.forEach(d => {
                if (d) message += `🔹 *${d.label}*: ${d.value}\n`;
            });
        }
        if (hasOut) {
             if(formType === 'transfer-in-out' || formType === 'transfer-different' || formType === 'transfer-all') message += `\n*${t('formFieldLabels.transferOutHeading')}*\n`;
             transferOutDetails.forEach(d => {
                if (d) message += `🔹 *${d.label}*: ${d.value}\n`;
            });
        }
        if (hasNormal && !hasIn && !hasOut) { // Prevent double-listing for combined forms
             normalTransferDetails.forEach(d => {
                if (d) message += `🔹 *${d.label}*: ${d.value}\n`;
            });
        }
    }

    // Excursions
    if (reservationData.excursions.length > 0) {
        message += `\n*--- 🏞️ ${t('excursionsTitle')} ---*\n`;
        reservationData.excursions.forEach(ex => {
            message += `- ${ex.name} (${ex.date} - ${ex.time})\n`;
        });
    }
    const customExcursion = findDetail('customExcursionDetails');
    if(customExcursion) {
        if (reservationData.excursions.length === 0) message += `\n*--- 🏞️ ${t('excursionsTitle')} ---*\n`;
        message += `📝 *${customExcursion.label}*: ${customExcursion.value}\n`;
    }

    // Payment
    const paymentDetails = [findDetail('price'), findDetail('deposit'), findDetail('paymentMethod'), findDetail('currency')];
    if (paymentDetails.some(d => d)) {
        message += `\n*--- 💸 Método de pago ---*\n`;
        paymentDetails.forEach(d => {
            if(d) message += `🔹 *${d.label}*: ${d.value}\n`;
        });
    }

    const notes = findDetail('notes');
    if (notes) {
        message += `\n📝 *${notes.label}*: ${notes.value}\n`;
    }

    // Calendar links
    if (calendarLinks.length > 0) {
        message += `\n*--- 🗓️ ${t('addToCalendarLabel')} ---*\n`;
        calendarLinks.forEach((cal, index) => {
            message += `${index + 1}. *${cal.name}*: ${cal.link}\n`;
        });
    }

    return message;
};


const handleFormSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!validateForm(form)) return;

    const submitBtn = form.querySelector('.submit-btn') as HTMLButtonElement;
    const btnText = submitBtn.querySelector('span');
    const t = (key: string, options?: any) => getTranslation(key, options) as string;
    const originalBtnText = btnText ? btnText.textContent : t('submitButton');

    submitBtn.disabled = true;
    if (btnText) btnText.textContent = t('sendingButton');

    const reservationData = getReservationDetails(form);
    const formType = form.dataset.formType || '';

    // Helper function to generate detailed descriptions for calendar events
    const generateEventDescription = (
        baseDescription: string,
        specificEventDetails: { label: string; value: string }[]
    ): string => {
        let fullDescription = `${baseDescription}\n\n`;
        
        let commonDetailsString = '';
        const commonDetailsMap: {id: string, labelKey: string, icon: string}[] = [
            { id: 'fullName', labelKey: 'fullNameLabel', icon: '👤' },
            { id: 'whatsapp', labelKey: 'whatsappLabel', icon: '📱' },
            { id: 'passengers', labelKey: 'passengersLabel', icon: '👨‍👩‍👧‍👦' },
            { id: 'luggage', labelKey: 'luggageLabel', icon: '🧳' },
            { id: 'origin', labelKey: 'originLabel', icon: '🌍' },
        ];
        
        commonDetailsMap.forEach(detailInfo => {
            const value = reservationData.details.find(d => d.id === detailInfo.id)?.value;
            if (value) {
                commonDetailsString += `${detailInfo.icon} ${t(detailInfo.labelKey)}: ${value}\n`;
            }
        });
        
        if (commonDetailsString) {
             fullDescription += `--- Detalles de la Reserva ---\n${commonDetailsString}\n`;
        }

        let specificDetailsString = '';
        specificEventDetails.forEach(detail => {
             specificDetailsString += `• ${detail.label}: ${detail.value}\n`;
        });

        if (specificDetailsString) {
            fullDescription += `--- Detalles del Evento ---\n${specificDetailsString}\n`;
        }
        
        const notes = reservationData.details.find(d => d.id === 'notes')?.value;
        if (notes) {
            fullDescription += `--- ${t('notesLabel')} ---\n${notes}`;
        }

        return fullDescription.trim();
    };

    // Collect all potential calendar events
    const allEvents: CalendarEvent[] = [];
    const findDetailValue = (id: string) => reservationData.details.find(d => d.id === id)?.value || '';

    if (['transfer-in', 'transfer-in-out', 'transfer-different', 'transfer-all'].includes(formType)) {
        const arrivalDate = findDetailValue('arrivalDate');
        const flightTime = findDetailValue('flightTime');
        if (arrivalDate && flightTime) {
            const flightNumber = findDetailValue('flightNumber');
            const destination = findDetailValue('destination');

            const baseDesc = `${t('transferInTitle')}: Vuelo ${flightNumber}`;
            const specificDetails = [
                { label: t('formFieldLabels.airportOrigin'), value: findDetailValue('airportOrigin') },
                { label: t('formFieldLabels.destination'), value: destination },
                { label: t('formFieldLabels.arrivalDate'), value: arrivalDate },
                { label: t('formFieldLabels.flightTime'), value: flightTime },
                { label: t('formFieldLabels.flightNumber'), value: flightNumber },
            ].filter(d => d.value);

            allEvents.push({
                title: `${t('transferInTitle')}: Vuelo ${flightNumber || ''}`.trim(),
                date: arrivalDate, time: flightTime, location: destination,
                description: generateEventDescription(baseDesc, specificDetails)
            });
        }
    }
    if (['transfer-out', 'transfer-in-out', 'transfer-different', 'transfer-all'].includes(formType)) {
        const departureDate = findDetailValue('departureDate');
        const departureTime = findDetailValue('departureTime');
        if (departureDate && departureTime) {
            const flightNumberOut = findDetailValue('flightNumberOut');
            const hotelOrigin = findDetailValue('hotelOrigin');
            
            const baseDesc = `${t('transferOutTitle')}: Recogida para vuelo ${flightNumberOut}`;
            const specificDetails = [
                { label: t('formFieldLabels.hotelOrigin'), value: hotelOrigin },
                { label: t('formFieldLabels.airportDestination'), value: findDetailValue('airportDestination') },
                { label: t('formFieldLabels.departureDate'), value: departureDate },
                { label: t('formFieldLabels.departureTime'), value: departureTime },
                { label: t('formFieldLabels.flightTimeOut'), value: findDetailValue('flightTimeOut') },
                { label: t('formFieldLabels.flightNumberOut'), value: flightNumberOut },
            ].filter(d => d.value);

            allEvents.push({
                title: `${t('transferOutTitle')}: Vuelo ${flightNumberOut || ''}`.trim(),
                date: departureDate, time: departureTime, location: hotelOrigin,
                description: generateEventDescription(baseDesc, specificDetails)
            });
        }
    }
    if (formType === 'transfer-normal') {
        const transferDate = findDetailValue('transferDate');
        const departureTime = findDetailValue('departureTime');
        if (transferDate && departureTime) {
            const hotelOrigin = findDetailValue('hotelOrigin');
            const destination = findDetailValue('destination');

            const baseDesc = t('transferNormalTitle');
            const specificDetails = [
                { label: t('formFieldLabels.hotelOrigin'), value: hotelOrigin },
                { label: t('formFieldLabels.destination'), value: destination },
                { label: t('formFieldLabels.transferDate'), value: transferDate },
                { label: t('formFieldLabels.departureTime'), value: departureTime },
            ].filter(d => d.value);

            allEvents.push({
                title: t('transferNormalTitle'), date: transferDate, time: departureTime,
                location: destination,
                description: generateEventDescription(baseDesc, specificDetails)
            });
        }
    }
    reservationData.excursions.forEach(excursion => {
        if (excursion.date && excursion.time) {
            const baseDesc = `Excursión: ${excursion.name}`;
            const specificDetails = [
                { label: t('formFieldLabels.excursionDate'), value: excursion.date },
                { label: t('formFieldLabels.excursionTime'), value: excursion.time },
            ];
            
            allEvents.push({
                title: `${t('excursionsTitle')}: ${excursion.name}`, date: excursion.date, time: excursion.time,
                description: generateEventDescription(baseDesc, specificDetails)
            });
        }
    });

    // Generate and shorten calendar links
    const longLinks = allEvents.map(eventData => ({
        name: eventData.title,
        link: generateGoogleCalendarLink(eventData)
    })).filter(cal => cal.link);
    
    const shorteningPromises = longLinks.map(cal => shortenUrl(cal.link).then(shortLink => ({ name: cal.name, link: shortLink })));
    const calendarLinks = await Promise.all(shorteningPromises);

    // Build and send WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(formType, reservationData, calendarLinks);
    const whatsappUrl = `https://wa.me/5493757678145?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Show confirmation
    setTimeout(() => {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = originalBtnText;
        closeModal('formModal');
        showNotification('notificationSent');

        const confirmationModal = document.getElementById('confirmationModal') as HTMLElement;
        const confirmationMessage = document.getElementById('confirmationMessage') as HTMLElement;
        const tipsContainer = document.getElementById('confirmationTips') as HTMLElement;

        let messageKey = 'confirmationMessageDefault';
        let tipsKey = 'confirmationTipsDefault';
        let tipsTitleKey = 'confirmationTipsDefaultTitle';

        if (calendarLinks.length > 0) {
            messageKey = 'confirmationMessageExcursions';
        }
        if (formType === 'excursions' || formType === 'transfer-all') {
            tipsKey = 'confirmationTipsExcursions';
            tipsTitleKey = 'confirmationTipsExcursionsTitle';
        }

        confirmationMessage.textContent = t(messageKey);
        const tips = (t(tipsKey)).split('|');
        let tipsHtml = `
            <h3>${t(tipsTitleKey)}</h3>
            <ul>${tips.map(tip => `<li><i class="fas fa-check-circle"></i> ${escapeHtml(tip)}</li>`).join('')}</ul>`;
        
        if (calendarLinks.length > 0) {
            const calendarLinksHtml = `<h3>${t('addToCalendarLabel')}</h3>` + calendarLinks.map(cal => `
                <a href="${cal.link}" target="_blank" rel="noopener noreferrer" class="submit-btn calendar-link">
                    <i class="fas fa-calendar-plus"></i> ${escapeHtml(cal.name)}
                </a>
            `).join('');
            tipsHtml = calendarLinksHtml + tipsHtml;
        }

        tipsContainer.innerHTML = tipsHtml;
        confirmationModal.style.display = 'block';

    }, 1500);
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Modal handling
    const formModal = document.getElementById('formModal') as HTMLElement;
    const confirmationModal = document.getElementById('confirmationModal') as HTMLElement;
    const shareModal = document.getElementById('shareModal') as HTMLElement;

    document.querySelectorAll('.form-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('card-share-icon')) {
                 e.preventDefault();
                 e.stopPropagation();
                 openShareModal(card as HTMLElement);
            } else {
                 const formType = card.getAttribute('data-form');
                 if (formType) {
                    e.preventDefault();
                    openFormModal(formType);
                 }
            }
        });
    });

    formModal.querySelector('.modal-close')?.addEventListener('click', () => closeModal('formModal'));
    confirmationModal.querySelector('.modal-close')?.addEventListener('click', () => closeModal('confirmationModal'));
    document.getElementById('confirmationCloseBtn')?.addEventListener('click', () => closeModal('confirmationModal'));
    document.getElementById('shareModalClose')?.addEventListener('click', () => closeModal('shareModal'));

    window.addEventListener('click', (event) => {
        if (event.target === formModal) closeModal('formModal');
        if (event.target === confirmationModal) closeModal('confirmationModal');
        if (event.target === shareModal) closeModal('shareModal');
    });

    // Form submission
    const reservationForm = document.getElementById('reservationForm') as HTMLFormElement;
    reservationForm.addEventListener('submit', handleFormSubmit);

    // Language selector
    const languageSelect = document.getElementById('languageSelect') as HTMLSelectElement;
    languageSelect.addEventListener('change', () => {
        currentLang = languageSelect.value;
        applyTranslations();
    });
    
    // Share functionality
    const openShareModal = (card: HTMLElement) => {
        const configKey = card.dataset.form;
        if (!configKey) return;
        
        const config = formConfigs[configKey];
        const shareModalTitle = document.getElementById('shareModalTitle') as HTMLElement;
        const shareLinkInput = document.getElementById('shareLinkInput') as HTMLInputElement;

        const modalContent = shareModal.querySelector('.modal-content') as HTMLElement;
        modalContent.style.setProperty('--modal-color', config.color);
        modalContent.style.setProperty('--modal-color-dark', config.colorDark);

        const url = new URL(window.location.href);
        url.searchParams.set('service', configKey);
        
        shareModalTitle.textContent = getTranslation('shareLinkTitle') as string;
        shareLinkInput.value = url.toString();
        
        shareModal.style.display = 'block';
    };
    
    document.getElementById('copyShareLinkBtn')?.addEventListener('click', () => {
        const linkInput = document.getElementById('shareLinkInput') as HTMLInputElement;
        navigator.clipboard.writeText(linkInput.value).then(() => {
            showNotification('linkCopiedNotification');
        });
    });

    document.getElementById('nativeShareBtn')?.addEventListener('click', () => {
        const linkInput = document.getElementById('shareLinkInput') as HTMLInputElement;
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: getTranslation('shareMessage') as string,
                url: linkInput.value,
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support native share
            alert('Native share not supported on this browser.');
        }
    });

    // Check for URL params to open a service directly
    const urlParams = new URLSearchParams(window.location.search);
    const serviceToOpen = urlParams.get('service');
    if (serviceToOpen && formConfigs[serviceToOpen]) {
        openFormModal(serviceToOpen);
    }

    // Initial translation apply
    applyTranslations();
});