(ns plasync.core
  (:gen-class)
  (:require [clojure.core.async :as async :refer [>! <! >!! <!! go chan buffer close! alts!!]]))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))