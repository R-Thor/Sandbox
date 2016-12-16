(ns tic-tac-clo.core
  (:gen-class))
(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
(def game-board (zipmap (range 9) (repeat 9 "#")))
(def players ["O" "X"])
(def win-conditions [[0 1 2][3 4 5][6 7 8][0 3 6][1 4 7][2 5 8][0 4 8][2 4 6]])
(def square-values (frequencies (flatten win-conditions)))
(defn squares-available [board] (keys (filter (fn [[k v]](= "#" v)) board)))
(defn square-distribution [board winconditions]
 (let [square-occupiers (distinct(vals board))]
   square-occupiers))
;(defn 