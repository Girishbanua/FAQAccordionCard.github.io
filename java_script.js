const faqs = document.querySelectorAll(".qna")

faqs.forEach(qna => {
    qna.addEventListener("click", () => {        
        qna.classList.toggle("active")
    })
   /* qna.addEventListener("click", () => {
        qna.classList.remove("active")
    })*/
})

