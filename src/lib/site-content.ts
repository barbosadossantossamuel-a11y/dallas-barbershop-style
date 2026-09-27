export const siteContent = {
  whatsappNumber: "5562999060802",
  whatsappMessage: "Olá! Vim pelo site da Dallas Barbearia e gostaria de agendar um horário.",
  addressLines: ["Posto Rede Carreteiro 10", "Av. São Francisco, 40", "Goiânia - GO"],
  mapsUrl: "https://maps.app.goo.gl/6ocUioCkosxCWuNE8",
  reviewsUrl: "https://share.google/3PQIwwPWFU7sBtSdL",
  instagramUrl: "",
  instagramHandle: "Instagram da Dallas",
  hours: "Consulte os horários disponíveis pelo WhatsApp.",
  services: [
    { name: "Corte masculino", description: "Clássico, moderno ou degradê, com acabamento preciso." },
    { name: "Barba", description: "Desenho, alinhamento e cuidado para valorizar seus traços." },
    { name: "Corte + barba", description: "A experiência completa para renovar cabelo e barba." },
    { name: "Acabamento", description: "Contornos limpos e detalhes que prolongam seu visual." },
    { name: "Sobrancelha", description: "Alinhamento discreto, natural e feito com precisão." },
  ],
};

export const whatsappUrl = `https://wa.me/${siteContent.whatsappNumber}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;