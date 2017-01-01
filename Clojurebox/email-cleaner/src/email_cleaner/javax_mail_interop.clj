(ns email-cleaner.javax-mail-interop
  (:gen-class)
  (:import 
    [java.util Properties]
    [javax.mail Session]
  )
)
;(defn props-set [key value]
(defn props-set [key value]
  (let 
    [props (doto (Properties. )(.setProperty key, value))] props))
(defn session-set "Session session = Session.getInstance(props, null);"
[props]
(let [session (. Session getInstance props nil)] session))
(defn store-get [session] (.getStore session))
(defn folder-get [store folder] (.getFolder folder))
(defn folder-open [folder mode](.open mode))
(defn folder-message-count [folder] (.getMessageCount folder))
(defn folder-message-get [folder index] (.getMessage folder))
(defn message-from-addresses [message] (.getFrom message))
(defn message-get-subject [message] (.getSubject message))
