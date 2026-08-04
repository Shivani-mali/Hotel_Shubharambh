import p_tikka from '../../assets/Menu/veg_special/Crush_paneer_tikka_masala.jpeg';
import k_angara from '../../assets/Menu/veg_special/kaju_anagara.jpeg';
import s_dish from '../../assets/Menu/veg_special/Special शुभारंभ डिश.png';
import v_jaipuri from '../../assets/Menu/veg_special/veg_jaipuri.jpeg';
import v_maratha from '../../assets/Menu/veg_special/veg_maratha.jpeg';
import v_tawa from '../../assets/Menu/veg_special/veg_tava_masala.jpeg';

import c_leg from '../../assets/Menu/nonveg_special/Chicken_leg_piece.jpeg';
import c_murg from '../../assets/Menu/nonveg_special/chicken_murg_masalam.jpeg';
import c_tand from '../../assets/Menu/nonveg_special/चिकन तंदुरी.jpeg';
import c_banjara from '../../assets/Menu/nonveg_special/चिकन बंजारा कबाब.jpeg';
import c_seekh from '../../assets/Menu/nonveg_special/चिकन शीख कबाब.jpeg';
import nv_platter from '../../assets/Menu/nonveg_special/Chicken_platter_rate_629.jpeg';
import m_lonche from '../../assets/Menu/nonveg_special/मटण लोणचे.png';

import t_butter from '../../assets/Menu/Butter chicken thali.jpeg';
import t_mutton from '../../assets/Menu/Mutton धनगरी थाळी.jpeg';
import t_rakti from '../../assets/Menu/Rakti mundi थाळी.jpeg';

export const mainTabs = [
  { id: 'veg', label: '🥗 शाकाहारी' },
  { id: 'chicken', label: '🍗 चिकन' },
  { id: 'mutton', label: '🥩 मटण' },
  { id: 'tandoor', label: '🔥 तंदूर' },
  { id: 'seafood', label: '🦀 सी फूड' },
  { id: 'biryani', label: '🍛 बिर्याणी' },
  { id: 'soup', label: '🍲 सूप' },
  { id: 'rice', label: '🍚 राईस' },
  { id: 'roti', label: '🥖 रोटी' },
  { id: 'thali', label: '🍽 थाळी' },
  { id: 'drinks', label: '🥤 पेय' }
];

export const specialOffers = [
  { id: "so1", name: "स्पे. बटर चिकन थाळी", price: "270", type: "Non-Veg", isHot: true, badge: "🔥 स्पेशल", img: t_butter },
  { id: "so2", name: "मटण धनगरी थाळी", price: "300", type: "Non-Veg", isHot: true, badge: "🔥 स्पेशल", img: t_mutton },
  { id: "so3", name: "रक्ती मुंडी थाळी", price: "240", type: "Non-Veg", isHot: false, badge: "⭐ लोकप्रिय", img: t_rakti },
  { id: "so4", name: "चिकन तंदुरी हाफ/फुल", price: "270 / 490", type: "Non-Veg", isHot: true, badge: "🔥 ऑफर", img: c_tand },
  { id: "so5", name: "स्पेशल शुभारंभ डिश (रेड/ग्रीन)", price: "350", type: "Veg", isHot: true, badge: "🔥 स्पेशल", img: s_dish },
  { id: "so6", name: "चिकन प्लॅटर", price: "629", type: "Non-Veg", isHot: true, badge: "🔥 ऑफर", img: nv_platter }
];

export const chefRecommends = [
  { id: "cr1", name: "चिकन लेगपिस", price: "230", type: "Non-Veg", desc: "चविष्ट आणि मसालेदार चिकन लेगपिस.", img: c_leg, badge: "👨‍🍳 शेफची निवड" },
  { id: "cr2", name: "चिकन मुर्ग मुसल्लम", price: "380", type: "Non-Veg", desc: "अस्सल मुर्ग मुसल्लम.", img: c_murg, badge: "⭐ लोकप्रिय" },
  { id: "cr3", name: "चिकन बंजारा कबाब (8 पीस)", price: "260", type: "Non-Veg", desc: "तंदुरी चिकन बंजारा कबाब.", img: c_banjara, badge: "👨‍🍳 शेफची निवड" },
  { id: "cr4", name: "चिकन शीख कबाब", price: "240", type: "Non-Veg", desc: "स्वादिष्ट चिकन शीख कबाब.", img: c_seekh, badge: "⭐ लोकप्रिय" },
  { id: "cr5", name: "मटण लोणचे", price: "250", type: "Non-Veg", desc: "गावरान मटण लोणचे.", img: m_lonche, badge: "👨‍🍳 शेफची निवड" },
  { id: "cr6", name: "पनीर टिक्का मसाला (खिसुन)", price: "240", type: "Veg", desc: "मसालेदार पनीर टिक्का (खिसुन).", img: p_tikka, badge: "⭐ लोकप्रिय" },
  { id: "cr7", name: "काजू अंगारा (सिझलर)", price: "250", type: "Veg", desc: "काजू अंगारा सिझलर डिश.", img: k_angara, badge: "👨‍🍳 शेफची निवड" },
  { id: "cr8", name: "व्हेज जयपुरी", price: "250", type: "Veg", desc: "अस्सल व्हेज जयपुरी.", img: v_jaipuri, badge: "⭐ लोकप्रिय" },
  { id: "cr9", name: "व्हेज मराठा", price: "240", type: "Veg", desc: "झणझणीत व्हेज मराठा.", img: v_maratha, badge: "👨‍🍳 शेफची निवड" },
  { id: "cr10", name: "व्हेज तवा मसाला", price: "240", type: "Veg", desc: "व्हेज तवा मसाला.", img: v_tawa, badge: "⭐ लोकप्रिय" },
];

export const menuData = [
  // व्हेज सूप (Veg Soup) - soup
  { id: "v1", tab: "soup", category: "व्हेज सूप", name: "व्हेज मंचाव सूप", price: "80", type: "Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "v2", tab: "soup", category: "व्हेज सूप", name: "हॉट ॲन्ड सोअर सूप", price: "80", type: "Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "v3", tab: "soup", category: "व्हेज सूप", name: "नुडल्स सूप", price: "80", type: "Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "v4", tab: "soup", category: "व्हेज सूप", name: "क्लीअर सूप", price: "80", type: "Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "v5", tab: "soup", category: "व्हेज सूप", name: "टोमॅटो सूप", price: "80", type: "Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "v6", tab: "soup", category: "व्हेज सूप", name: "स्विटकॉर्न सूप", price: "100", type: "Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },

  // व्हेज स्नॅक्स (Veg Snacks) - veg
  { id: "v7", tab: "veg", category: "व्हेज स्नॅक्स", name: "गोबी मंच्युरियन", price: "170", type: "Veg", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80" },
  { id: "v8", tab: "veg", category: "व्हेज स्नॅक्स", name: "व्हेज क्रिस्पी", price: "190", type: "Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80" },
  { id: "v9", tab: "veg", category: "व्हेज स्नॅक्स", name: "व्हेज मंच्युरियन", price: "200", type: "Veg", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80" },
  { id: "v10", tab: "veg", category: "व्हेज स्नॅक्स", name: "पनीर चिल्ली", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80" },
  { id: "v11", tab: "veg", category: "व्हेज स्नॅक्स", name: "पनीर 65", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80" },
  { id: "v12", tab: "veg", category: "व्हेज स्नॅक्स", name: "फिंगर चिप्स", price: "150", type: "Veg", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80" },
  { id: "v13", tab: "veg", category: "व्हेज स्नॅक्स", name: "हनी चिली पोटॅटो", price: "160", type: "Veg", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80" },

  // पापड/सॅलेड/रायता - veg
  { id: "v14", tab: "veg", category: "पापड/सॅलेड/रायता", name: "रोस्टेड पापड", price: "20", type: "Veg" },
  { id: "v15", tab: "veg", category: "पापड/सॅलेड/रायता", name: "फ्राय पापड", price: "25", type: "Veg" },
  { id: "v16", tab: "veg", category: "पापड/सॅलेड/रायता", name: "मसाला पापड", price: "35", type: "Veg" },
  { id: "v17", tab: "veg", category: "पापड/सॅलेड/रायता", name: "मिक्स व्हेज रायता", price: "70", type: "Veg" },
  { id: "v18", tab: "veg", category: "पापड/सॅलेड/रायता", name: "बुंदी रायता", price: "80", type: "Veg" },
  { id: "v19", tab: "veg", category: "पापड/सॅलेड/रायता", name: "दही वाटी", price: "25", type: "Veg" },

  // व्हेज कबाब - tandoor
  { id: "v20", tab: "tandoor", category: "व्हेज कबाब", name: "हराभरा कबाब", price: "190", type: "Veg", img: "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?auto=format&fit=crop&q=80" },
  { id: "v21", tab: "tandoor", category: "व्हेज कबाब", name: "पनीर टिक्का कबाब", price: "210", type: "Veg", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80" },
  { id: "v22", tab: "tandoor", category: "व्हेज कबाब", name: "पनीर बंजारा कबाब", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?auto=format&fit=crop&q=80" },
  { id: "v23", tab: "tandoor", category: "व्हेज कबाब", name: "पनीर मलई कबाब", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?auto=format&fit=crop&q=80" },
  { id: "v24", tab: "tandoor", category: "व्हेज कबाब", name: "पनीर पहाडी कबाब", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?auto=format&fit=crop&q=80" },
  { id: "v25", tab: "tandoor", category: "व्हेज कबाब", name: "पनीर प्लॅटर", price: "490", type: "Veg", badge: "🔥 स्पेशल", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },

  // राईस - rice
  { id: "v26", tab: "rice", category: "राईस", name: "प्लेन राईस हाफ/फुल", price: "70/- 120/-", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v27", tab: "rice", category: "राईस", name: "जीरा राईस हाफ/फुल", price: "80/- 130/-", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v28", tab: "rice", category: "राईस", name: "खुश्का राईस हाफ/फुल", price: "90/- 140/-", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v29", tab: "rice", category: "राईस", name: "व्हेज पुलाव", price: "160", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v30", tab: "rice", category: "राईस", name: "कर्ड राईस", price: "140", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v31", tab: "rice", category: "राईस", name: "व्हेज बिर्याणी", price: "160", type: "Veg", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },
  { id: "v32", tab: "rice", category: "राईस", name: "दाल खिचडी", price: "150", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v33", tab: "rice", category: "राईस", name: "व्हेज हैद्राबादी बिर्याणी", price: "190", type: "Veg", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },
  { id: "v34", tab: "rice", category: "राईस", name: "पनीर पुलाव", price: "200", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v35", tab: "rice", category: "राईस", name: "काजू पुलाव", price: "230", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v36", tab: "rice", category: "राईस", name: "ग्रीनपीस पुलाव", price: "180", type: "Veg", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80" },
  { id: "v37", tab: "rice", category: "राईस", name: "व्हेज मटका दम बिर्याणी", price: "230", type: "Veg", badge: "👨‍🍳 शेफची निवड", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },

  // रोटी - roti
  { id: "v38", tab: "roti", category: "रोटी", name: "रोटी", price: "20", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v39", tab: "roti", category: "रोटी", name: "बटर रोटी", price: "25", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v40", tab: "roti", category: "रोटी", name: "नान", price: "35", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v41", tab: "roti", category: "रोटी", name: "बटर नान", price: "40", type: "Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v42", tab: "roti", category: "रोटी", name: "कुलच्या", price: "40", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v43", tab: "roti", category: "रोटी", name: "बटर कुलच्या", price: "45", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v44", tab: "roti", category: "रोटी", name: "बटर पराठा", price: "40", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v45", tab: "roti", category: "रोटी", name: "आलू पराठा", price: "50", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v46", tab: "roti", category: "रोटी", name: "स्टाफ पराठा", price: "60", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v47", tab: "roti", category: "रोटी", name: "लसून नान", price: "65", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v48", tab: "roti", category: "रोटी", name: "चपाती", price: "15", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },
  { id: "v49", tab: "roti", category: "रोटी", name: "भाकरी", price: "25", type: "Veg", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" },

  // पंजाबी-व्हेज डिश - veg
  { id: "v50", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज कोल्हापूरी", price: "210", type: "Veg", badge: "🌶 मसालेदार", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v51", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज हंडी", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v52", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज अंगारा (सिझलर)", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v53", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज भुना", price: "230", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v54", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज जयपुरी", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v55", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज तवा मसाला", price: "240", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v56", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज हैद्राबादी", price: "240", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v57", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज मराठा", price: "240", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v58", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "मशरुम मसाला", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v59", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "मलाई कोफ्ता", price: "270", type: "Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v60", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज कढई स्पेशल", price: "230", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v61", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज मॅक्स मसाला (व्हाईट ग्रेव्ही)", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v62", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज मालवणी", price: "270", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v63", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "स्पेशल शुभारंभ डिश (रेड/ग्रीन)", price: "350", type: "Veg", badge: "👨‍🍳 शेफची निवड", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v64", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज खिमा", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v65", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज मख्खनवाला", price: "240", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v66", tab: "veg", category: "पंजाबी-व्हेज डिश", name: "व्हेज पटियाला", price: "260", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },

  // काजू डिश - veg
  { id: "v67", tab: "veg", category: "काजू डिश", name: "काजू मसाला", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v68", tab: "veg", category: "काजू डिश", name: "काजू कुर्मा", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v69", tab: "veg", category: "काजू डिश", name: "काजू अंगारा (सिझलर)", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v70", tab: "veg", category: "काजू डिश", name: "काजू मॅक्स मसाला (व्हाईट ग्रेव्ही)", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v71", tab: "veg", category: "काजू डिश", name: "काजू मख्खनवाला", price: "240", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v72", tab: "veg", category: "काजू डिश", name: "काजू बहार (सिझलर)", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },

  // व्हेज पनीर डिश - veg
  { id: "v73", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर मटर", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v74", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर हंडी", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v75", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर टिक्का मसाला", price: "220", type: "Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v76", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर टिक्का मसाला (खिसुन)", price: "240", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v77", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर कढई", price: "220", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v78", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर मशरुम", price: "240", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v79", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर बटर मसाला", price: "220", type: "Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v80", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर अंगारा (सिझलर)", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v81", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर चिंगारी", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v82", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर भुर्जी", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v83", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर काजू मसाला", price: "250", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v84", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर चटपटा (ड्राय)", price: "280", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v85", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर हरियाली", price: "290", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v86", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर राजवाडी (स्टफिंग)", price: "260", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v87", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर पटियाला", price: "270", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v88", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर लाजवाब", price: "260", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v89", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर लवली", price: "260", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v90", tab: "veg", category: "व्हेज पनीर डिश", name: "पनीर पालक", price: "230", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v91", tab: "veg", category: "व्हेज पनीर डिश", name: "प्लेन पालक", price: "150", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },
  { id: "v92", tab: "veg", category: "व्हेज पनीर डिश", name: "लसूनी पालक", price: "200", type: "Veg", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80" },

  // महाराष्ट्रीयन डिश - veg
  { id: "v93", tab: "veg", category: "महाराष्ट्रीयन डिश", name: "अख्खा मसूर", price: "80/- 140/-", type: "Veg", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80" },
  { id: "v94", tab: "veg", category: "महाराष्ट्रीयन डिश", name: "मेथी बेसन", price: "150", type: "Veg", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80" },
  { id: "v95", tab: "veg", category: "महाराष्ट्रीयन डिश", name: "भेंडी मसाला", price: "150", type: "Veg", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80" },
  { id: "v96", tab: "veg", category: "महाराष्ट्रीयन डिश", name: "बैंगन मसाला", price: "150", type: "Veg", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80" },

  // दाल - veg
  { id: "v97", tab: "veg", category: "दाल", name: "दाल फ्राय", price: "100", type: "Veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v98", tab: "veg", category: "दाल", name: "दाल तडका", price: "120", type: "Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
  { id: "v99", tab: "veg", category: "दाल", name: "दाल फ्राय कोल्हापूरी", price: "130", type: "Veg", badge: "🌶 मसालेदार", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },

  // थाळी (Thali) - thali
  { id: "t1", tab: "thali", category: "व्हेज थाळी", name: "स्पेशल शुभारंभ व्हेज थाळी", price: "260", type: "Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, काजू मसाला प्लेट 1, व्हेज कोल्हापूरी वाटी 1, स्वीट, डाळ 1, राईस, पापड, लोणचे, सोलकढी", badge: "👨‍🍳 शेफची निवड", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "t2", tab: "thali", category: "व्हेज थाळी", name: "स्पेशल व्हेज थाळी", price: "200", type: "Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, भाजी 1, पनीर मसाला प्लेट, स्वीट, डाळ 1, राईस, पापड, लोणचे, सोलकढी", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "t3", tab: "thali", category: "व्हेज थाळी", name: "व्हेज थाळी", price: "170", type: "Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, भाजी 2, स्वीट, डाळ वाटी 1, राईस, पापड, लोणचे, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "t4", tab: "thali", category: "व्हेज थाळी", name: "स्पेशल अख्खा मसुर थाळी", price: "140", type: "Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, अख्खा मसुर प्लेट, डाळ वाटी 1, राईस, पापड, लोणचे, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },

  // शाकाहारी एक्स्ट्रा प्लेट - veg
  { id: "v100", tab: "veg", category: "शाकाहारी एक्स्ट्रा प्लेट", name: "पनीर मसाला प्लेट", price: "80", type: "Veg" },
  { id: "v101", tab: "veg", category: "शाकाहारी एक्स्ट्रा प्लेट", name: "भाजी वाटी", price: "60", type: "Veg" },
  { id: "v102", tab: "veg", category: "शाकाहारी एक्स्ट्रा प्लेट", name: "स्वीट वाटी", price: "30", type: "Veg" },
  { id: "v103", tab: "veg", category: "शाकाहारी एक्स्ट्रा प्लेट", name: "ग्रेव्ही वाटी/बटर गिरवी", price: "40/- 50/-", type: "Veg" },
  { id: "v104", tab: "veg", category: "शाकाहारी एक्स्ट्रा प्लेट", name: "डाळ वाटी", price: "30", type: "Veg" },
  { id: "v105", tab: "drinks", category: "पेय", name: "सोलकढी ग्लास", price: "25", type: "Veg" },
  { id: "v106", tab: "drinks", category: "पेय", name: "ताक ग्लास", price: "25", type: "Veg" },
  { id: "v107", tab: "drinks", category: "पेय", name: "लस्सी", price: "50", type: "Veg" },

  // नॉन-व्हेज सूप - soup
  { id: "nv1", tab: "soup", category: "नॉन-व्हेज सूप", name: "चिकन मंचाऊ सूप", price: "90", type: "Non-Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "nv2", tab: "soup", category: "नॉन-व्हेज सूप", name: "चिकन हॉट ॲन्ड सॉर सूप", price: "90", type: "Non-Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "nv3", tab: "soup", category: "नॉन-व्हेज सूप", name: "चिकन क्लिअर सूप", price: "80", type: "Non-Veg", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "nv4", tab: "soup", category: "नॉन-व्हेज सूप", name: "तांबडा रस्सा वाटी", price: "15", type: "Non-Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },
  { id: "nv5", tab: "soup", category: "नॉन-व्हेज सूप", name: "पांढरा रस्सा वाटी", price: "15", type: "Non-Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" },

  // नॉन-व्हेज स्नॅक्स - chicken
  { id: "nv6", tab: "chicken", category: "नॉन-व्हेज स्नॅक्स", name: "चिकन क्रिस्पी", price: "230", type: "Non-Veg", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80" },
  { id: "nv7", tab: "chicken", category: "नॉन-व्हेज स्नॅक्स", name: "चिकन चिल्ली", price: "230", type: "Non-Veg", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80" },
  { id: "nv8", tab: "chicken", category: "नॉन-व्हेज स्नॅक्स", name: "चिकन मंचुरियन", price: "220", type: "Non-Veg", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80" },
  { id: "nv9", tab: "chicken", category: "नॉन-व्हेज स्नॅक्स", name: "चिकन 65", price: "170", type: "Non-Veg", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80" },
  { id: "nv10", tab: "chicken", category: "नॉन-व्हेज स्नॅक्स", name: "चिकन मॅगनेट", price: "260", type: "Non-Veg", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80" },
  { id: "nv11", tab: "chicken", category: "नॉन-व्हेज स्नॅक्स", name: "चिकन लॉलीपॉप (8 पीस)", price: "300", type: "Non-Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80" },
  { id: "nv12", tab: "chicken", category: "नॉन-व्हेज स्नॅक्स", name: "चिकन हॉट गार्लिक", price: "260", type: "Non-Veg", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80" },

  // नॉन-व्हेज कबाब - tandoor
  { id: "nv13", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन टिक्का कबाब", price: "220", type: "Non-Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv14", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन चटपटा कबाब", price: "240", type: "Non-Veg", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv15", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन पहाडी कबाब (8 पीस)", price: "240", type: "Non-Veg", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv16", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन मलाई कबाब (8 पीस)", price: "240", type: "Non-Veg", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv17", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन बंजारा कबाब (8 पीस)", price: "260", type: "Non-Veg", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv18", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन अंगारा कबाब (8 पीस)", price: "240", type: "Non-Veg", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv19", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन मालवणी कबाब (8 पीस)", price: "240", type: "Non-Veg", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv20", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन तंदुरी हाफ (4 पीस)", price: "270", type: "Non-Veg", badge: "🔥 स्पेशल", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
  { id: "nv21", tab: "tandoor", category: "नॉन-व्हेज कबाब", name: "चिकन तंदुरी फुल (8 पीस)", price: "490", type: "Non-Veg", badge: "🔥 स्पेशल", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },

  // नॉन-व्हेज डिश चिकन - chicken
  { id: "nv22", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन हंडी हाफ/फुल", price: "240/- 490/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv23", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "बटर चिकन हाफ/फुल", price: "280/- 550/-", type: "Non-Veg", badge: "👨‍🍳 शेफची निवड", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80" },
  { id: "nv24", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "बटर चिकन बोनलेस हाफ/फुल", price: "310/- 600/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80" },
  { id: "nv25", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन कढई", price: "230", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv26", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन मालवणी हाफ/फुल", price: "290/- 550/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv27", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन फ्राय हाफ/फुल", price: "240/- 470/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv28", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन टिक्का मसाला", price: "240", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv29", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन कोल्हापूरी", price: "230", type: "Non-Veg", badge: "🌶 मसालेदार", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv30", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन हैद्राबादी", price: "260", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv31", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन लाहोरी", price: "260", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv32", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन लाजवाब", price: "260", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv33", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन अंगारा (सिझलर)", price: "260", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv34", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन साऊजी", price: "270", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv35", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन मुर्ग मुसल्लम", price: "380", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv36", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन धनगरी", price: "270", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv37", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन रोगन ज्युस", price: "290", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv38", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन खर्डा", price: "240", type: "Non-Veg", badge: "🌶 मसालेदार", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv39", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन काला मसाला", price: "270", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv40", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन मटका", price: "290", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv41", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन भुना मसाला", price: "290", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },
  { id: "nv42", tab: "chicken", category: "नॉन-व्हेज डिश चिकन", name: "चिकन लाल परी", price: "320", type: "Non-Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80" },

  // पंजाबी मटण - mutton
  { id: "nv43", tab: "mutton", category: "पंजाबी मटण", name: "मटण मसाला हाफ/फुल", price: "330/- 640/-", type: "Non-Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv44", tab: "mutton", category: "पंजाबी मटण", name: "मटण हंडी हाफ/फुल", price: "340/- 650/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv45", tab: "mutton", category: "पंजाबी मटण", name: "मटण फ्राय हाफ/फुल", price: "330/- 640/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv46", tab: "mutton", category: "पंजाबी मटण", name: "मटण कढई", price: "340", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv47", tab: "mutton", category: "पंजाबी मटण", name: "मटण कोल्हापूरी", price: "340", type: "Non-Veg", badge: "🌶 मसालेदार", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv48", tab: "mutton", category: "पंजाबी मटण", name: "मटण मराठा", price: "340", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv49", tab: "mutton", category: "पंजाबी मटण", name: "मटण रोगन ज्युस", price: "380", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv50", tab: "mutton", category: "पंजाबी मटण", name: "मटण अंगारा (सिझलर)", price: "370", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv51", tab: "mutton", category: "पंजाबी मटण", name: "मटण मालवणी हाफ/फुल", price: "360/- 680/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv52", tab: "mutton", category: "पंजाबी मटण", name: "मटण हैद्राबादी", price: "340", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv53", tab: "mutton", category: "पंजाबी मटण", name: "मटण धनगरी हाफ/फुल", price: "340/- 650/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv54", tab: "mutton", category: "पंजाबी मटण", name: "मटण मटका हंडी हाफ/फुल", price: "370/- 700/-", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv55", tab: "mutton", category: "पंजाबी मटण", name: "मटण खिमा मसाला", price: "370", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv56", tab: "mutton", category: "पंजाबी मटण", name: "मटण मख्खनवाला", price: "360", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },
  { id: "nv57", tab: "mutton", category: "पंजाबी मटण", name: "मटण चटपटा", price: "360", type: "Non-Veg", img: "https://images.unsplash.com/photo-1589302168068-94022c0e86a9?auto=format&fit=crop&q=80" },

  // बिर्याणी (Non-Veg) - biryani
  { id: "nv58", tab: "biryani", category: "बिर्याणी", name: "मटण बिर्याणी", price: "290", type: "Non-Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },
  { id: "nv59", tab: "biryani", category: "बिर्याणी", name: "चिकन बिर्याणी", price: "200", type: "Non-Veg", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },
  { id: "nv60", tab: "biryani", category: "बिर्याणी", name: "अंडा बिर्याणी", price: "140", type: "Non-Veg", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },
  { id: "nv61", tab: "biryani", category: "बिर्याणी", name: "चिकन मटका दम बिर्याणी", price: "240", type: "Non-Veg", badge: "👨‍🍳 शेफची निवड", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },
  { id: "nv62", tab: "biryani", category: "बिर्याणी", name: "मटण मटका दम बिर्याणी", price: "320", type: "Non-Veg", badge: "👨‍🍳 शेफची निवड", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" },

  // मांसाहारी एक्स्ट्रा प्लेट - chicken/mutton
  { id: "nv63", tab: "mutton", category: "मांसाहारी एक्स्ट्रा प्लेट", name: "मटण फ्राय / मसाला प्लेट", price: "180", type: "Non-Veg" },
  { id: "nv64", tab: "chicken", category: "मांसाहारी एक्स्ट्रा प्लेट", name: "चिकन फ्राय / मसाला प्लेट", price: "110", type: "Non-Veg" },
  { id: "nv65", tab: "chicken", category: "मांसाहारी एक्स्ट्रा प्लेट", name: "बटर चिकन प्लेट", price: "150", type: "Non-Veg" },
  { id: "nv66", tab: "mutton", category: "मांसाहारी एक्स्ट्रा प्लेट", name: "रक्ती मुंडी प्लेट", price: "120", type: "Non-Veg" },
  { id: "nv67", tab: "chicken", category: "मांसाहारी एक्स्ट्रा प्लेट", name: "अंडा वाटी (सिंगल)", price: "30", type: "Non-Veg" },
  { id: "nv68", tab: "mutton", category: "मांसाहारी एक्स्ट्रा प्लेट", name: "एमटी थाळी (तांबडा, पांढरा, सोलकढी)", price: "60", type: "Non-Veg" },
  { id: "nv69", tab: "mutton", category: "मांसाहारी एक्स्ट्रा प्लेट", name: "ग्रेव्ही वाटी बटर / प्लेन", price: "40/- 50/-", type: "Non-Veg" },

  // नॉन-व्हेज थाळी (Non-Veg Thali) - thali
  { id: "nt1", tab: "thali", category: "नॉन-व्हेज थाळी", name: "स्पेशल शुभारंभ थाळी", price: "390", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, मटण फ्राय प्लेट, चिकन मसाला प्लेट, रक्ती वाटी, अंडा मसाला वाटी, राईस, तांबडा-पांढरा रस्सा, सोलकढी", badge: "👨‍🍳 शेफची निवड", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt2", tab: "thali", category: "नॉन-व्हेज थाळी", name: "मटण फ्राय / मसाला थाळी", price: "300", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, मटण फ्राय / मसाला प्लेट, रक्ती वाटी, अंडा मसाला वाटी, राईस, तांबडा-पांढरा रस्सा, सोलकढी", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt3", tab: "thali", category: "नॉन-व्हेज थाळी", name: "चिकन खर्डा थाळी", price: "220", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, चिकन खर्डा प्लेट, अंडा मसाला वाटी, राईस, तांबडा-पांढरा रस्सा, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt4", tab: "thali", category: "नॉन-व्हेज थाळी", name: "मटण धनगरी थाळी", price: "300", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, मटण धनगरी प्लेट, रक्ती वाटी, अंडा मसाला वाटी, राईस, तांबडा-पांढरा रस्सा, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt5", tab: "thali", category: "नॉन-व्हेज थाळी", name: "रक्ती मुंडी थाळी", price: "240", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, मुंडी मसाला प्लेट, रक्ती वाटी, राईस, मुंडी रस्सा, तांबडा-पांढरा रस्सा, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt6", tab: "thali", category: "नॉन-व्हेज थाळी", name: "स्पे. बटर चिकन थाळी", price: "270", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, बटर चिकन प्लेट, चिकन फ्राय प्लेट, अंडा मसाला वाटी, राईस, तांबडा-पांढरा रस्सा, सोलकढी", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt7", tab: "thali", category: "नॉन-व्हेज थाळी", name: "चिकन फ्राय / मसाला थाळी", price: "200", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, चिकन फ्राय / मसाला प्लेट, अंडा मसाला वाटी, राईस, तांबडा-पांढरा रस्सा, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt8", tab: "thali", category: "नॉन-व्हेज थाळी", name: "चिकन लेगपिस थाळी", price: "230", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, चिकन लेगपिस प्लेट, अंडा मसाला वाटी, राईस, तांबडा-पांढरा रस्सा, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt9", tab: "thali", category: "नॉन-व्हेज थाळी", name: "अंडा मसाला थाळी", price: "140", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, अंडा मसाला प्लेट, राईस, तांबडा-पांढरा रस्सा, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "nt10", tab: "thali", category: "नॉन-व्हेज थाळी", name: "अंडा मख्खन थाळी", price: "160", type: "Non-Veg", desc: "भाकरी 2 / चपाती 3 / रोटी 3, अंडा मख्खन प्लेट, राईस, तांबडा-पांढरा रस्सा, सोलकढी", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },

  // चटपटीत अंडा - chicken
  { id: "e1", tab: "chicken", category: "चटपटीत अंडा", name: "बॉयल्ड अंडा 2 नग", price: "30", type: "Non-Veg" },
  { id: "e2", tab: "chicken", category: "चटपटीत अंडा", name: "अंडा ऑम्लेट (डबल)", price: "70", type: "Non-Veg" },
  { id: "e3", tab: "chicken", category: "चटपटीत अंडा", name: "अंडा भुर्जी (डबल)", price: "80", type: "Non-Veg" },
  { id: "e4", tab: "chicken", category: "चटपटीत अंडा", name: "अंडा मसाला प्लेट", price: "70", type: "Non-Veg" },

  // सी फूड थाळीज् - seafood
  { id: "sf1", tab: "seafood", category: "सी फूड थाळीज्", name: "बांगडा थाळी (लिमिटेड)", price: "250", type: "Non-Veg", desc: "1 पीस फिश फ्राय प्लेट, फिशकरी, सुक्कट वाटी 1, सोलकढी, भाकरी 2, चपाती 3, रोटी 3, राईस प्लेट", badge: "⭐ लोकप्रिय", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "sf2", tab: "seafood", category: "सी फूड थाळीज्", name: "खेकडा थाळी", price: "250", type: "Non-Veg", desc: "1 प्लेट खेकडा फ्राय, खेकडा करी, अंडावाटी, सोलकढी, रोटी 3/चपाती 3/भाकरी 2, राईस प्लेट", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },
  { id: "sf3", tab: "seafood", category: "सी फूड थाळीज्", name: "सुरमई थाळी (लिमिटेड)", price: "सिझनेबल", type: "Non-Veg", desc: "1 पीस फिश फ्राय प्लेट, फिशकरी, सुक्कट वाटी 1, सोलकढी, भाकरी 2, चपाती 3, रोटी 3, राईस प्लेट", img: "https://images.unsplash.com/photo-1626779840251-ce54be1d3cb4?auto=format&fit=crop&q=80" },

  // खेकडा डिश - seafood
  { id: "sf4", tab: "seafood", category: "खेकडा डिश", name: "खेकडा फ्राय (2 पीस)", price: "180", type: "Non-Veg" },
  { id: "sf5", tab: "seafood", category: "खेकडा डिश", name: "क्रॅब लॉलीपॉप (6 पीस)", price: "300", type: "Non-Veg" },
  { id: "sf6", tab: "seafood", category: "खेकडा डिश", name: "क्रॅब भुर्जी", price: "300", type: "Non-Veg" },

  // फिश डिश - seafood
  { id: "sf7", tab: "seafood", category: "फिश डिश", name: "सुरमई फ्राय", price: "सिझनेबल", type: "Non-Veg" },
  { id: "sf8", tab: "seafood", category: "फिश डिश", name: "पापलेट फ्राय", price: "सिझनेबल", type: "Non-Veg" },
  { id: "sf9", tab: "seafood", category: "फिश डिश", name: "प्रॉन्स फ्राय", price: "सिझनेबल", type: "Non-Veg" },
  { id: "sf10", tab: "seafood", category: "फिश डिश", name: "बांगडा फ्राय (1 पीस)", price: "90", type: "Non-Veg" }
];
