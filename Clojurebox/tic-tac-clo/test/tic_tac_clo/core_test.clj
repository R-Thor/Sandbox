(ns tic-tac-clo.core-test
  (:require [clojure.test :refer :all]
            [tic-tac-clo.core :refer :all]))
;(deftest tictactest (is (= true (= 1 1))))
(deftest scoreable-square-count-in-wincondition-test 
	(is (= 1 (-scoreable-square-count-in-wincondition {0 nil 1 nil 2 \X} [0 1 2])))
	(is (= 2 (-scoreable-square-count-in-wincondition {0 nil 1 \X 2 \X}  [0 1 2])))
	(is (= 3 (-scoreable-square-count-in-wincondition {0 \X 1 \X 2 \X}   [0 1 2])))
)
(deftest squares-available-test 
	(is (= 1 (count (squares-available {0 nil}))))
	(is (= 2 (count (squares-available {0 nil 1 nil}))))
)
(deftest square-distribution-1-test 
	(is (= 1 (count (square-distribution {0 nil}))))
	(is (= 2 (count (square-distribution {0 nil 1 \X}))))
)
(deftest remove#predicate-test 
	(is (= true (remove#predicate nil)))
	(is (= false (remove#predicate \X)))
)
(deftest -scoreable-square-count-in-wincondition-test 
	(is (= 1 (-scoreable-square-count-in-wincondition {0 \X 1 \X 2 \X} [0 3 4])))
	(is (= 2 (-scoreable-square-count-in-wincondition {0 \X 1 \X 2 \X} [0 1 4])))
	(is (= 3 (-scoreable-square-count-in-wincondition {0 \X 1 \X 2 \X} [0 1 2])))
)
(deftest -scoreing-player-variability-test 
	(is (= 1 (-scoreing-player-variability {0 \X 1 \X 2 \X} [0 1 2])))
	(is (= 2 (-scoreing-player-variability {0 \X 1 \X 2 \O} [0 1 2])))
	(is (= 3 (-scoreing-player-variability {0 \X 1 \Y 2 \Z} [0 1 2])))
)

(deftest win-event?-test 
	(is (= false (win-event? {0 \X 1 \X 2 \O} [0 1 2])))
	(is (= true  (win-event? {0 \X 1 \X 2 \X} [0 1 2])))
)
(deftest winner?-test 
	(is (= false (winner? {0 \X 1 \X 2 \O} [[0 1 2] [3 4 5]])))
	(is (= true  (winner? {0 \X 1 \X 2 \X} [[0 1 2] [3 4 5]])))
)
;(deftest game-loop-test
;	(game-loop game-board players win-conditions square-values)
;)
