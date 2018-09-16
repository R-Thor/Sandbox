(ns tictactoe.core
  (:gen-class))
(def game-board {0 0,1 0,2 0,3 0,4 0,5 0,6 0,7 0,8 0})
(def win-conditions [[0 1 2] [3 4 5] [6 7 8] [0 4 8] [2 4 6] [0 3 6] [1 4 7] [2 5 8]])
(def square-values {0 3, 1 2, 2 3, 3 2, 4 4, 5 2, 6 3, 7 2, 8 3})
(defn print-board [board]
  (println board)
  (doseq [square-keyval board]
    (print square-keyval)
    (if (=(rem (inc (key square-keyval)) 3)0)
      (print "\n"))))
      
;(defn remove#predicate [a] (= a "#"))
;(defn winner? [board winconditions]
;  (doseq [wincondition winconditions]
;      (let 
;        [xocount (count(remove remove#predicate ( vals (select-keys board wincondition))))  
;         distinctcount (count(distinct( vals (select-keys board wincondition))))
;        (and (= xocount 3) (= distinctcount 1)))
;
(def game-board2 {0 "O",1 "O",2 "O",3 "X",4 "X",5 "X",6 "#",7 "#",8 "#"})
;(defn test_winner? [] (winner? game-board2 win-conditions))
;(defn test_print-board [](print-board game-board))
;(defn test_print-board2 [](print-board game-board2))
(defn -main []
  ;(println game-board)
  ;(println win-conditions)
  ;(println square-values)
  (print-board game-board2))
  

