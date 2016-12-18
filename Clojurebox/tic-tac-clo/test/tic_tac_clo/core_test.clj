(ns tic-tac-clo.core-test
  (:require [clojure.test :refer :all]
            [tic-tac-clo.core :refer :all]))
(deftest tictactest (is (= true (= 1 1))))
;(deftest game-board-test [board] (=is (= board {0 nil, 1 nil, 2 nil, 3 nil, 4 nil, 5 nil, 6 nil, 7 nil, 8 nil})))
(deftest winner?-test (let [board {0 \X 1 \X 2 \X} winconditions [[0 1 2]]] (winner? board winconditions)))
;(deftest game-board-test [board] (=is (= board {0 nil, 1 nil, 2 nil, 3 nil, 4 nil, 5 nil, 6 nil, 7 nil, 8 nil})))
;(defn winner? [board winconditions]