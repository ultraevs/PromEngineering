package controller

import (
	"app/internal/model"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/go-gomail/gomail"
	"net/http"
	"os"
	"time"
)

type Response struct {
	Message string `json:"message"`
}

// PostCallback godoc
// @Summary Post Callback
// @Description Post Callback Button
// @Param name formData string true "Name"
// @Param phone formData string true "Phone"
// @Param comment formData string true "Comment"
// @Produce json
// @Tags callback
// @Success 200 {object} Response
// @Router /callback [post]
func PostCallback(context *gin.Context) {
	var request model.CallbackRequest
	if err := context.ShouldBind(&request); err != nil {
		response := Response{Message: "error 4xx"}
		context.JSON(http.StatusBadRequest, gin.H{"response": response})
		return
	}
	name := request.Name
	phone := request.Phone
	comment := request.Comment

	err := SendEmail(name, phone, comment)

	if err != nil {
		response := Response{Message: err.Error()}
		context.JSON(http.StatusInternalServerError, gin.H{"response": response})
		return
	}

	response := Response{Message: "success 2xx"}
	context.JSON(http.StatusOK, gin.H{"response": response})
}

func SendEmail(name, phone, comment string) error {
	emailAddress := os.Getenv("EMAIL_ADDRESS")
	emailPassword := os.Getenv("EMAIL_PASSWORD")

	mail := gomail.NewMessage()
	mail.SetHeader("From", emailAddress)
	mail.SetHeader("To", os.Getenv("EMAIL_SUBJECT"))
	mail.SetHeader("Subject", "Новая заявка с сайта ultraevs.ru")

	moscowTime := time.Now().UTC().Add(3 * time.Hour)
	timeString := moscowTime.Format("2006-01-02 15:04:05")
	body := fmt.Sprintf("Имя: %s\nТелефон: %s\nКомментарий: %s\nВремя отправки: %s",
		name, phone, comment, timeString)

	mail.SetBody("text/plain", body)
	dialer := gomail.NewDialer("smtp.gmail.com", 587, emailAddress, emailPassword)
	err := dialer.DialAndSend(mail)
	return err
}
