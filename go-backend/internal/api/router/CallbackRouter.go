package router

import (
	"app/internal/api/controller"
)

func (router *Router) CallbackRoutes() {
	router.engine.POST("/callback", controller.PostCallback)
}
