package common

import (
	"log"
	"time"
)

// 写超时警告日志 通用方法

func TimeoutWarning(tag, detailed string, start time.Time, timeLimit int64) {
	dis := time.Now().Sub(start).Milliseconds()
	if dis > timeLimit {
		log.Println( tag, " detailed:", detailed, "TimeoutWarning using", dis, "s")
	}
}
