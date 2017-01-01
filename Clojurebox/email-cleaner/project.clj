(defproject email-cleaner "0.1.0-SNAPSHOT"
  :description 
  "email-cleaner: tool to clean out my yahoo email i've had for 20 years"
  :url "https://github.com/R-Thor"
  :license {:name "R-Thor ;p"
            :url "https://github.com/R-Thor"}
  :dependencies 
  [
	[org.clojure/clojure "1.8.0"]
	;javax.mail
	[com.sun.mail/javax.mail "1.5.5"]
  ]
  :main ^:skip-aot email-cleaner.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
