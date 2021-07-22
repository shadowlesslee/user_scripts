// 初始化插件
const ar = ['مراجعة', 'نجمة', 'معدل', 'سلبي', 'إيجابي', 'إزالة', 'حذف', 'تغيير', 'تتغير', 'تحديث', 'تعديل', 'تخلص من', 'خبرة التسوق', 'ردود الفعل', 'موقع الكتروني', 'حلقة الوصل', 'شكرا', 'شكرا لكم', 'إذا كنت بحاجة إلى أي مساعدة أخرى، فلا تتردد في الاتصال بنا', 'رقم التعريف الخاص بالطلب', 'عنوان', 'موقعك', 'خصم', 'ترقية وظيفية', 'السعر']
const de = ['Bewertung', 'Sternen', 'Rezension', 'Comment', 'Kommentar', 'Negativ', 'Positiv', 'Schlecht', 'Gut', 'Entfernen', 'Löschen', 'Veränderung', 'Aktualisieren', 'Bearbeiten', 'Beseitigen, abschütteln', 'Kauffserfahrungen', 'Feedback', 'www.', 'Webseite', 'Verknüpfung', 'Danke, vielen dank, dankschön, ', 'Wenn Sie andere Hilfe brauchen, kontaktieren Sie bitte uns, werden wir Ihnen helfen. ', 'Bestellnummer', 'sku', 'Asin', 'Adresse', 'Ort', 'Rabatt', 'Coupon', 'Gutschein', 'Beförderung', 'Preis', 'herunterladen']
const fr = ['Commentaire', 'Évaluation', 'Avis', 'Étoile', 'Taux', 'Négatif', 'Positif', 'Mauvais', 'Bon', 'Retirer', 'Changer', 'Renouveller', 'Mettre à jour', 'Éditer', 'Expérience d\'achat', 'Feedback', 'www.', 'Site', 'Lien', 'Merci', 'Je vous remercie', 'si vous avez besoin d\'une autre aide, n\'hésitez pas à nous contacter', 'numéro de commande', 'sku', 'Asin', 'Adresse', 'Emplacement', 'Remise', 'Promotion', 'Code', 'Prix', 'Télécharger']
const nl = ['Recensie', 'Ster', 'Klantenrecensies', 'Beoordeling', 'Negatief', 'Positief', 'Slecht', 'Verwijderen', 'Verandering', 'Bijwerken', 'Bewerk', 'Van afkomen', 'Koopervaring', 'terugkoppeling', 'www.', 'Website', 'Koppeling', 'bedankt', 'dank je', 'Als u nog andere hulp nodig heeft, neem dan gerust contact met ons op', 'Order ID', 'sku', 'Asin', 'Adres', 'Plaats', 'Korting', 'Promotie', 'Prijs', 'downloaden']
const ja = ['レビュー', '評価', '星', '評定', '評点付け', 'ネガティブ', 'ポジティブ', '悪い', '低い', '削除', 'デリート', '交換', 'チェンジ', '更新', '修正', 'アップデート', '編集', 'エディット', '取り除く', 'ショッピング体験', 'フィードバック', 'www.', '注文ID', '注文番号', 'Sku ', 'Asin', '住所', 'アドレス', '割引', '値引き', 'ディスカウント', '販促', '販売促進', 'プロモーション', '値段', '価格', '保証']
const sv = ['Recension', 'Stjärna', 'Betygsätta', 'Betyg', 'Negativ', 'Positiv', 'Dålig', 'Avlägsna', 'Radera', 'Förändra', 'Uppdatering', 'Redigera', 'Göra sig av med', 'Shoppingupplevelse', 'feed-back', 'www.', 'Hemsida', 'Länk', 'tack', 'tack', 'om du behöver någon annan hjälp är du välkommen att kontakta oss', 'Beställnings-ID', 'sku', 'Asin', 'Adress', 'Plats', 'Rabatt', 'Befordran', 'Pris', 'ladda ner']
const es = ['review', 'reseña', 'Estrella', 'Ratio', 'Puntuación', 'Negativo', 'Positivo', 'Malo', 'Quitar', 'Eliminar', 'Cambiar', 'Actualizar', 'Editar', 'Quitar', 'Experiencia de compra', 'feedback', 'Valoración', 'www.', 'Sitio web', 'Enlace', 'Gracias', 'gracias', 'Si necesita alguna ayuda, no dude en ponerse en contacto con nosotros.', 'ID del pedido', 'sku', 'Asin', 'Dirección', 'Ubicación', 'Descuento', 'Promoción', 'Precio', 'descargar']
const it = ['Recensione', 'Stella', 'Vota', 'Valutazione', 'Negativo', 'Positivo', 'Male', 'Rimuovere', 'Elimina', 'Modificare', 'Aggiornare', 'correggere', 'Liberarsi di', 'Esperienza di acquisto', 'feedback', 'www.', 'Sito web', 'Link', 'Grazie', 'grazie', 'se hai bisogno di altro aiuto, non esitare a contattarci', 'ID ordine', 'sku', 'Asin', 'Indirizzo', 'Posizione', 'Sconto', 'Promozione', 'Prezzo', 'Scarica']
const en = ['Review', 'Star', 'Rate', 'Rating', 'Negative', 'Positive', 'Bad', 'Remove', 'Delete', 'Change', 'Update', 'Edit', 'Get rid of', 'Shopping experience', 'feedback', 'www.', 'Website', 'Link', 'thanks', 'thank you', 'if you need any other help', 'please feel free to contact us', 'Order ID', 'sku', 'Asin', 'Address', 'Location', 'Discount', 'Promotion', 'Price', 'download']

const keywords = {
  en, de, fr, nl, sv, es, it, ja, ar
}

export {
  keywords
}