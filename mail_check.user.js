// ==UserScript==
// @name         敏感词匹配
// @namespace    http://mail.ugreen.com/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        http://mail.ugreen.com/cgi-bin/frame_html*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

!(function () {
    'use strict';
    console.log('hello, old baby~ ')
    const ar = ['مراجعة', 'نجمة', 'معدل', 'سلبي', 'إيجابي', 'إزالة', 'حذف', 'تغيير', 'تتغير', 'تحديث', 'تعديل', 'تخلص من', 'خبرة التسوق', 'ردود الفعل', 'موقع الكتروني', 'حلقة الوصل', 'شكرا', 'شكرا لكم', 'إذا كنت بحاجة إلى أي مساعدة أخرى، فلا تتردد في الاتصال بنا', 'رقم التعريف الخاص بالطلب', 'عنوان', 'موقعك', 'خصم', 'ترقية وظيفية', 'السعر']
    const de = ['Bewertung', 'Sternen', 'Rezension', 'Comment', 'Kommentar', 'Negativ', 'Positiv', 'Schlecht', 'Gut', 'Entfernen', 'Löschen', 'Veränderung', 'Aktualisieren', 'Bearbeiten', 'Beseitigen, abschütteln', 'Kauffserfahrungen', 'Feedback', 'www.', 'Webseite', 'Verknüpfung', 'Danke, vielen dank, dankschön, ', 'Wenn Sie andere Hilfe brauchen, kontaktieren Sie bitte uns, werden wir Ihnen helfen. ', 'Bestellnummer', 'sku', 'Asin', 'Adresse', 'Ort', 'Rabatt', 'Coupon', 'Gutschein', 'Beförderung', 'Preis', 'herunterladen']
    const fr = ['Commentaire', 'Évaluation', 'Avis', 'Étoile', 'Taux', 'Négatif', 'Positif', 'Mauvais', 'Bon', 'Retirer', 'Changer', 'Renouveller', 'Mettre à jour', 'Éditer', 'Expérience d\'achat', 'Feedback', 'www.', 'Site', 'Lien', 'Merci', 'Je vous remercie', 'si vous avez besoin d\'une autre aide, n\'hésitez pas à nous contacter', 'numéro de commande', 'sku', 'Asin', 'Adresse', 'Emplacement', 'Remise', 'Promotion', 'Code', 'Prix', 'Télécharger']
    const nl = ['Recensie', 'Ster', 'Klantenrecensies', 'Beoordeling', 'Negatief', 'Positief', 'Slecht', 'Verwijderen', 'Verandering', 'Bijwerken', 'Bewerk', 'Van afkomen', 'Koopervaring', 'terugkoppeling', 'www.', 'Website', 'Koppeling', 'bedankt', 'dank je', 'Als u nog andere hulp nodig heeft, neem dan gerust contact met ons op', 'Order ID', 'sku', 'Asin', 'Adres', 'Plaats', 'Korting', 'Promotie', 'Prijs', 'downloaden']
    const ja = ['レビュー', '評価', '星', '評定', '評点付け', 'ネガティブ', 'ポジティブ', '悪い', '低い', '削除', 'デリート', '交換', 'チェンジ', '更新', '修正', 'アップデート', '編集', 'エディット', '取り除く', 'ショッピング体験', 'フィードバック', 'www.', '注文ID', '注文番号', 'Sku ', 'Asin', '住所', 'アドレス', '割引', '値引き', 'ディスカウント', '販促', '販売促進', 'プロモーション', '値段', '価格', '保証']
    const sv = ['Recension', 'Stjärna', 'Betygsätta', 'Betyg', 'Negativ', 'Positiv', 'Dålig', 'Avlägsna', 'Radera', 'Förändra', 'Uppdatering', 'Redigera', 'Göra sig av med', 'Shoppingupplevelse', 'feed-back', 'www.', 'Hemsida', 'Länk', 'tack', 'tack', 'om du behöver någon annan hjälp är du välkommen att kontakta oss', 'Beställnings-ID', 'sku', 'Asin', 'Adress', 'Plats', 'Rabatt', 'Befordran', 'Pris', 'ladda ner']
    const es = ['review', 'reseña', 'Estrella', 'Ratio', 'Puntuación', 'Negativo', 'Positivo', 'Malo', 'Quitar', 'Eliminar', 'Cambiar', 'Actualizar', 'Editar', 'Quitar', 'Experiencia de compra', 'feedback', 'Valoración', 'www.', 'Sitio web', 'Enlace', 'Gracias', 'gracias', 'Si necesita alguna ayuda, no dude en ponerse en contacto con nosotros.', 'ID del pedido', 'sku', 'Asin', 'Dirección', 'Ubicación', 'Descuento', 'Promoción', 'Precio', 'descargar']
    const it = ['Recensione', 'Stella', 'Vota', 'Valutazione', 'Negativo', 'Positivo', 'Male', 'Rimuovere', 'Elimina', 'Modificare', 'Aggiornare', 'correggere', 'Liberarsi di', 'Esperienza di acquisto', 'feedback', 'www.', 'Sito web', 'Link', 'Grazie', 'grazie', 'se hai bisogno di altro aiuto, non esitare a contattarci', 'ID ordine', 'sku', 'Asin', 'Indirizzo', 'Posizione', 'Sconto', 'Promozione', 'Prezzo', 'Scarica']
    const en = ['Review', 'Star', 'Rate', 'Rating', 'Negative', 'Positive', 'Bad', 'Remove', 'Delete', 'Change', 'Update', 'Edit', 'Get rid of', 'Shopping experience', 'feedback', 'www.', 'Website', 'Link', 'thanks', 'thank you', 'if you need any other help', 'please feel free to contact us', 'Order ID', 'sku', 'Asin', 'Address', 'Location', 'Discount', 'Promotion', 'Price', 'download']

    class KeywordMatch {
        constructor() {
            this.regExp = this.getRegExp(Array.from(new Set([...ar, ...de, ...fr, ...nl, ...ja, ...sv, ...es, ...it, ...en])))
            console.log('regExp', this.regExp);
            this.render()
        }

        render() {
            const style = document.createElement("style")
            style.innerHTML = `
        #keywordMatch {
          position: fixed;
          bottom: 30%;
          right: 65px;
          z-index: 999999;
        }
        #keywordMatchBtn {
          background-color:#3bb3e0;
          font-size: 16px;
          letter-spacing: 2px;
          text-decoration:none;
          color:#fff;
          position:relative;
          padding:10px 20px;
          /*padding-right: 50px;*/
          cursor: pointer;
          background-image: linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
          background-image: -o-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
          background-image: -moz-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
          background-image: -webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
          background-image: -ms-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
          background-image: -webkit-gradient(
          linear,
          left bottom,
          left top,
          color-stop(0, rgb(44,160,202)),
          color-stop(1, rgb(62,184,229))
          );
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          -o-border-radius: 5px;
          border-radius: 5px;
          -webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
          -moz-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
          -o-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
          box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
        }
        #keywordMatchBtn:active {
          top:3px;
          background-image: linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
          background-image: -o-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
          background-image: -moz-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
          background-image: -webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
          background-image: -ms-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
          background-image: -webkit-gradient(
          linear,
          left bottom,
          left top,
          color-stop(0, rgb(62,184,229)),
          color-stop(1, rgb(44,160,202))
          );
          -webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
          -moz-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
          -o-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
          box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
        }
        /* #keywordMatchBtn::before {
          background-color:#2591b4;
          background-repeat:no-repeat;
          background-position:center center;
          content:"";
          width:20px;
          height:20px;
          position:absolute;
          right:15px;
          top:50%;
          margin-top:-9px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -o-border-radius: 50%;
          border-radius: 50%;
          -webkit-box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
          -moz-box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
          -o-box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
          box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
        }
        #keywordMatchBtn:active::before {
          top:50%;
          margin-top:-12px;
          -webkit-box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
          -moz-box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
          -o-box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
          box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
        } */
        `
            const keywordMatch = document.createElement("div")
            const tpl = `<div id="keywordMatchBtn">敏感词检测</div>`
            keywordMatch.id = 'keywordMatch'
            keywordMatch.innerHTML = tpl
            document.head.appendChild(style)
            document.body.appendChild(keywordMatch)
            this.setEvents()
        }

        setEvents() {
            const keywordMatchBtn = document.querySelector('#keywordMatchBtn')
            keywordMatchBtn.onclick = () => {
                this.startMatch()
            }
        }

        startMatch() {
            const iframeMain = document.querySelector('#mainFrame')
            const iframeArea = iframeMain.contentDocument.querySelector('.QMEditorIfrmEditArea')
            if (!iframeMain || !iframeArea) {
                alert('请在编辑邮件页面操作')
                return
            } else {
                const word = iframeArea.contentDocument.body.innerText
                if (!word) {
                    alert('请填写内容')
                    return
                }
                console.time("耗时");
                const res = word.match(this.regExp)
                console.timeEnd("耗时");
                this.renderMatch(res)
            }
        }

        renderMatch(arr) {
            let res = ''
            const matchList = document.querySelector('#matchList')
            if (!arr && !arr.length) {
                res = '没有检测到敏感词'
            } else {
                res = '检测到敏感词：'
                arr.forEach(item => {
                    res += `\n${item}`
                })
            }
            console.log(res);
            alert(res)
        }

        getRegExp(arr) {
            const str = arr.join('|')
            const regstr = `/\\\['${str}'\\\]/g`
            return eval(regstr)
        }
    }

    const keywordMatch = new KeywordMatch()
})();
