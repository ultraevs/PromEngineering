package model

type CallbackRequest struct {
	Name    string `form:"name" json:"name" binding:"required"`
	Phone   string `form:"phone" json:"phone" binding:"required"`
	Comment string `form:"comment" json:"comment" binding:"required"`
}
