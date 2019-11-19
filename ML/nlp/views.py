from django.shortcuts import render
import nltk
import numpy as np 
import random
import string
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import warnings
import sys
from django.http import JsonResponse
import os
from ML.settings import BASE_DIR
import json
file_path = os.path.join(BASE_DIR, 'nlp\\chatbot.txt')

def Robo(request,text):
    def LemTokens(tokens):
        return [lemmer.lemmatize(token) for token in tokens]
    def LemNormalize(text):
        remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)
        return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))
    def response(user_response):
        robo_response=''
        sent_tokens.append(user_response)
        TfidfVec = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
        tfidf = TfidfVec.fit_transform(sent_tokens)
        vals = cosine_similarity(tfidf[-1], tfidf)
        idx=vals.argsort()[0][-2]
        flat = vals.flatten()
        flat.sort()
        req_tfidf = flat[-2]
        if(req_tfidf==0):
            robo_response=robo_response+"I am sorry! I don't understand you"
            return robo_response
        else:
            with warnings.catch_warnings():
                warnings.filterwarnings('ignore',category=UserWarning)
            robo_response = robo_response+sent_tokens[idx]
            return robo_response
    f=open(file_path,'r',errors='ignore')

    raw=f.read()

    raw=raw.lower()

    sent_tokens = nltk.sent_tokenize(raw)# converts to list of sentences 
    word_tokens = nltk.word_tokenize(raw)# converts to list of words

    lemmer = nltk.stem.WordNetLemmatizer()

    user_response = text
    user_response=user_response.lower()
    x=response(user_response)
    sent_tokens.remove(user_response)
    return JsonResponse({'value':x})
